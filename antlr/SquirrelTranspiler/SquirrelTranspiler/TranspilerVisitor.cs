﻿
namespace SquirrelTranspiler
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Antlr4.Runtime.Misc;

	public class TranspilerVisitor : SquirrelBaseVisitor<string>
	{
		public override string VisitStats(SquirrelParser.StatsContext context)
		{
			SquirrelParser.StatincludingemptystatementContext[] contexts = context.GetRuleContexts<SquirrelParser.StatincludingemptystatementContext>();

			return contexts.Select(x => this.VisitStatincludingemptystatement(x)).Aggregate((x, y) => x + y);
		}

		public override string VisitStatincludingemptystatement(SquirrelParser.StatincludingemptystatementContext context)
		{
			if (context.stat() != null)
				return this.VisitStat(context.stat());
			return "";
		}

		public override string VisitStat(SquirrelParser.StatContext context)
		{
			if (context.objectLiteral() != null)
				return this.VisitObjectLiteral(context.objectLiteral());
			return this.VisitStatNotIncludingObjectLiteral(context.statNotIncludingObjectLiteral());
		}

		public override string VisitSwitchCaseStatement(SquirrelParser.SwitchCaseStatementContext context)
		{
			if (context.GetText().StartsWith("default"))
				return " default : " + this.VisitStats(context.stats());

			return " case " + this.VisitExp(context.exp()) + " : " + this.VisitStats(context.stats());
		}

		public override string VisitStatNotIncludingObjectLiteral(SquirrelParser.StatNotIncludingObjectLiteralContext context)
		{
			if (context.GetText().StartsWith("return"))
			{
				if (context.exp().Length == 0)
					return " return ; \n ";

				return " return " + this.VisitExp(context.exp(0)) + " ;\n ";
			}

			if (context.GetText().StartsWith("switch"))
			{
				string str = " switch ( " + this.VisitExp(context.exp(0)) + " ) ";
				str += " { ";

				SquirrelParser.SwitchCaseStatementContext[] contexts = context.GetRuleContexts<SquirrelParser.SwitchCaseStatementContext>();

				List<string> list = contexts.Select(x => this.VisitSwitchCaseStatement(x)).ToList();
				
				foreach (string e in list)
				{
					str += e;
				}
				return str + " } ";
			}

			if (context.breakStatement() != null)
				return " break ; ";

			if (context.whileKeyword() != null)
				return " while ( " + this.VisitExp(context.exp(0)) + " ) " + this.VisitStat(context.stat()) + " \n ";

			if (context.If() != null)
			{
				string str = " if ( " + this.VisitExp(context.exp(0)) + " ) " + this.VisitStatNotIncludingObjectLiteral(context.statNotIncludingObjectLiteral(0)) + " \n ";
				if (context.Else() != null)
					str += " else " + this.VisitStatNotIncludingObjectLiteral(context.statNotIncludingObjectLiteral(1)) + " \n ";
				return str;
			}

			if (context.LeftBrace() != null)
				return " { \n " + this.VisitStats(context.stats()) + " } \n ";

			if (context.initz() != null)
			{
				if (context.GetText().StartsWith("const"))
					return this.VisitInitz(context.initz()) + " ;\n ";
				return " var " + this.VisitInitz(context.initz()) + " ;\n ";
			}
			if (context.expNotIncludingObjectLiteral() != null)
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral()) + " ; \n";

			if (context.GetText().StartsWith("foreach"))
			{
				string str = "";
				str += " { ";

				str += "    var foreachOutput = squirrelForEach ( " + this.VisitExp(context.exp(0)) + " ) ; ";
				str += "    while ( true ) ";
				str += "    { ";
				str += "       foreachOutput . next ( ) ; ";
				str += "       if ( foreachOutput . isDone ( ) ) break ; ";

				if (context.id().Length == 2)
				{
					str += this.VisitId(context.id(0)) + " = foreachOutput . getKey ( ) ; ";
					str += this.VisitId(context.id(1)) + " = foreachOutput . getValue ( ) ; ";
				}
				else
					str += this.VisitId(context.id(0)) + " = foreachOutput . getValue ( ) ; ";
				str += this.VisitStatNotIncludingObjectLiteral(context.statNotIncludingObjectLiteral(0));

				str += "    } ";

				str += " } ";

				return str;
			}

			if (context.GetText().StartsWith("for"))
			{
				string str = " for ( ";
				str += this.VisitStat(context.stat());
				str += this.VisitExp(context.exp(0)) + " ; ";
				str += this.VisitExp(context.exp(1)) + " ) ";
				str += this.VisitStatNotIncludingObjectLiteral(context.statNotIncludingObjectLiteral(0));
				return str;
			}

			return "";
		}

		public override string VisitInitz(SquirrelParser.InitzContext context)
		{
			string str = this.VisitId(context.id());

			if (context.exp() != null)
				str += " = " + this.VisitExp(context.exp());

			return str;
		}

		public override string VisitDerefexp(SquirrelParser.DerefexpContext context)
		{
			if (context.id().Length == 1)
				return this.VisitId(context.id(0));
			return this.VisitId(context.id(0)) + " . " + this.VisitId(context.id(1));
		}

		public override string VisitArrayLiteral(SquirrelParser.ArrayLiteralContext context)
		{
			if (context.exp() == null)
				return " [ ] ";

			SquirrelParser.ExpContext[] contexts = context.GetRuleContexts<SquirrelParser.ExpContext>();

			List<string> list = contexts.Select(x => this.VisitExp(x)).ToList();

			string str = " [ ";

			bool isFirst = true;

			foreach (string e in list)
			{
				if (isFirst)
					isFirst = false;
				else
					str += " , ";

				str += e;
			}

			return str + " ] ";
		}

		public override string VisitFunctionParameter(SquirrelParser.FunctionParameterContext context)
		{
			if (context.exp() != null)
				return this.VisitId(context.id()) + " = " + this.VisitExp(context.exp());
			return this.VisitId(context.id());
		}

		public override string VisitFunctionDeclaration(SquirrelParser.FunctionDeclarationContext context)
		{
			string str = " function ( ";

			SquirrelParser.FunctionParameterContext[] contexts = context.GetRuleContexts<SquirrelParser.FunctionParameterContext>();

			List<string> list = contexts.Select(x => this.VisitFunctionParameter(x)).ToList();
			
			bool isFirst = true;
			foreach (string e in list)
			{
				if (isFirst)
					isFirst = false;
				else
					str += " , ";

				str += e;
			}

			str += " ) { " + this.VisitStats(context.stats()) + " } ";

			return str;
		}

		public override string VisitPropertyAssignment(SquirrelParser.PropertyAssignmentContext context)
		{
			return this.VisitId(context.id()) + " : " + this.VisitExp(context.exp());
		}

		public override string VisitObjectLiteral(SquirrelParser.ObjectLiteralContext context)
		{
			SquirrelParser.PropertyAssignmentContext[] contexts = context.GetRuleContexts<SquirrelParser.PropertyAssignmentContext>();

			List<string> list = contexts.Select(x => this.VisitPropertyAssignment(x)).ToList();

			string str = " { ";

			bool isFirst = true;

			foreach (string e in list)
			{
				if (isFirst)
					isFirst = false;
				else
					str += " , ";

				str += e;
			}

			return str + " } ";
		}

		public override string VisitArrayIndexing(SquirrelParser.ArrayIndexingContext context)
		{
			return " [ " + this.VisitExp(context.exp()) + " ] ";
		}

		public override string VisitExp(SquirrelParser.ExpContext context)
		{
			if (context.objectLiteral() != null)
				return this.VisitObjectLiteral(context.objectLiteral());

			return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral());
		}

		public override string VisitTypeOf(SquirrelParser.TypeOfContext context)
		{
			if (context.openSquareBracket() != null && context.openParen() != null)
				return " squirrelTypeOf ( " + this.VisitId(context.id()) + " ( ) [ " + this.VisitExp(context.exp()) + " ] ) ";
			if (context.openSquareBracket() != null)
				return " squirrelTypeOf ( " + this.VisitId(context.id()) + " [ " + this.VisitExp(context.exp()) + " ] ) ";
			if (context.openParen() != null)
				return " squirrelTypeOf ( " + this.VisitId(context.id()) + " ( ) ) ";
			return " squirrelTypeOf ( " + this.VisitId(context.id()) + " ) ";
		}

		public override string VisitAssignmentModificationOperator(SquirrelParser.AssignmentModificationOperatorContext context)
		{
			return " " + context.GetText() + " ";
		}

		public override string VisitClassStatements(SquirrelParser.ClassStatementsContext context)
		{
			SquirrelParser.ClassVariableDeclarationContext[] classVariables = context.GetRuleContexts<SquirrelParser.ClassVariableDeclarationContext>();
			List<string> classVariablesText = classVariables.Select(x => this.VisitClassVariableDeclaration(x)).ToList();

			SquirrelParser.ClassFunctionDeclarationContext[] classFunctions = context.GetRuleContexts<SquirrelParser.ClassFunctionDeclarationContext>();
			List<string> classFunctionsText = classFunctions.Select(x => this.VisitClassFunctionDeclaration(x)).ToList();

			SquirrelParser.ClassConstructorDeclarationContext[] constructorFunc = context.GetRuleContexts<SquirrelParser.ClassConstructorDeclarationContext>();
			List<string> constructorFuncText = constructorFunc.Select(x => this.VisitClassConstructorDeclaration(x)).ToList();

			string str = "";
			foreach (string s in classVariablesText)
				str += s;

			str += " \n with ( returnVal ) { \n ";

			foreach (string s in constructorFuncText)
				str += s;
			foreach (string s in classFunctionsText)
				str += s;

			str += "\n } \n";

			return str;
		}

		public override string VisitClassVariableDeclaration(SquirrelParser.ClassVariableDeclarationContext context)
		{
			return " returnVal . " + this.VisitId(context.id()) + " = " + this.VisitExp(context.exp()) + " ; \n";
		}

		public override string VisitClassConstructorDeclaration(SquirrelParser.ClassConstructorDeclarationContext context)
		{
			string str = " returnVal . constructor = function ( " + this.VisitClassConstructorArgs(context.classConstructorArgs())
				+ " ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;\n\n  " + this.VisitStats(context.stats()) + " } ; ";

			return str;
		}

		public override string VisitClassConstructorArgs(SquirrelParser.ClassConstructorArgsContext context)
		{
			SquirrelParser.ClassConstructorArgContext[] contexts = context.GetRuleContexts<SquirrelParser.ClassConstructorArgContext>();

			List<string> list = contexts.Select(x => this.VisitClassConstructorArg(x)).ToList();

			string str = "";

			bool isFirst = true;
			foreach (string e in list)
			{
				if (isFirst)
					isFirst = false;
				else
					str += " , ";

				str += e;
			}
			
			return str;
		}

		public override string VisitClassConstructorArg(SquirrelParser.ClassConstructorArgContext context)
		{
			if (context.exp() != null)
				return this.VisitId(context.id()) + " = " + this.VisitExp(context.exp());
			return this.VisitId(context.id());
		}

		public override string VisitClassFunctionDeclaration(SquirrelParser.ClassFunctionDeclarationContext context)
		{
			string str = " returnVal . " + this.VisitId(context.id()) + " = function ( ";

			SquirrelParser.FunctionParameterContext[] contexts = context.GetRuleContexts<SquirrelParser.FunctionParameterContext>().ToArray();

			List<string> list = contexts.Select(x => this.VisitFunctionParameter(x)).ToList();

			bool isFirst = true;
			foreach (string e in list)
			{
				if (isFirst)
					isFirst = false;
				else
					str += " , ";

				str += e;
			}

			str += " ) { " + this.VisitStats(context.stats()) + " } ; ";

			return str;
		}

		public override string VisitExpNotIncludingObjectLiteral(SquirrelParser.ExpNotIncludingObjectLiteralContext context)
		{
			if (context.classStatements() != null)
			{
				string str = " function ( ) { var returnVal = { constructor: function(){} } ; ";

				if (context.id() != null)
					str += " returnVal = " + this.VisitId(context.id()) + " ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor; ";

				str += this.VisitClassStatements(context.classStatements());
				str += " returnVal.constructor(...arguments); return returnVal ; ";
				str += " } ";

				return str;
			}

			if (context.GetText().StartsWith("base") && context.arguments() != null && context.id() != null)
			{
				return " baseMethods . " + this.VisitId(context.id()) + " " + this.VisitArguments(context.arguments());
			}

			if (context.GetText().StartsWith("base") && context.arguments() != null)
			{
				return " baseConstructor " + this.VisitArguments(context.arguments());
			}

			if (context.ternaryOperator() != null)
			{
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral())
					+ " ? "
					+ this.VisitExp(context.exp(0))
					+ " : "
					+ this.VisitExp(context.exp(1));
			}

			if (context.typeOf() != null)
			{
				return this.VisitTypeOf(context.typeOf());
			}

			if (context.assignmentModificationOperator() != null)
			{
				return this.VisitDerefexp(context.derefexp())
					+ this.VisitAssignmentModificationOperator(context.assignmentModificationOperator())
					+ this.VisitExp(context.exp(0));
			}

			if (context.derefexp() != null)
			{
				int index1 = context.GetText().IndexOf("=");
				int index2 = context.GetText().IndexOf("<-");

				if (index2 < 0 || index1 >= 0 && index1 <= index2)
					return this.VisitDerefexp(context.derefexp()) + " = " + this.VisitExp(context.exp(0));
				return this.VisitDerefexp(context.derefexp()) + " = " + this.VisitExp(context.exp(0));
			}

			if (context.openSquareBracket() != null)
			{
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral())
					+ " [ "
					+ this.VisitExp(context.exp(0))
					+ " ] = "
					+ this.VisitExp(context.exp(1));
			}

			if (context.openParen() != null)
				return " ( " + this.VisitExp(context.exp(0)) + " ) ";

			if (context.arrayIndexing() != null)
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral()) + this.VisitArrayIndexing(context.arrayIndexing());

			if (context.equalequal() != null)
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral()) + " == " + this.VisitExp(context.exp(0));

			if (context.notequal() != null)
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral()) + " != " + this.VisitExp(context.exp(0));
			
			if (context.functionDeclaration() != null)
				return this.VisitFunctionDeclaration(context.functionDeclaration());

			if (context.incrementOperator() != null)
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral()) + " ++ ";

			if (context.decrementOperator() != null)
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral()) + " -- ";

			if (context.expNotIncludingObjectLiteral() != null && context.id() != null && context.exp().Length == 0)
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral()) + " . " + this.VisitId(context.id());

			if (context.exp().Length > 0 && context.expNotIncludingObjectLiteral() != null && context.id() != null)
			{
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral()) + " . " + this.VisitId(context.id()) + " = " + this.VisitExp(context.exp(0));
			}

			if (context.negativeSign() != null)
			{
				return " - " + this.VisitExp(context.exp(0));
			}

			if (context.exp().Length > 0 && context.expNotIncludingObjectLiteral() != null && context.id() == null)
			{
				int lengthOfFirstExp = context.expNotIncludingObjectLiteral().GetText().Length;
				string expression = context.GetText().Substring(lengthOfFirstExp);
				string op;
				if (expression[0] == '*')
					op = " * ";
				else if (expression[0] == '/')
					op = " / ";
				else if (expression[0] == '%')
					op = " % ";
				else if (expression[0] == '+')
					op = " + ";
				else if (expression[0] == '-')
					op = " - ";
				else if (expression.StartsWith(">="))
					op = " >= ";
				else if (expression.StartsWith("<="))
					op = " <= ";
				else if (expression.StartsWith(">>"))
					op = " >> ";
				else if (expression.StartsWith("<<"))
					op = " << ";
				else if (expression[0] == '>')
					op = " > ";
				else if (expression[0] == '<')
					op = " < ";
				else if (expression.StartsWith("&&"))
					op = " && ";
				else if (expression[0] == '&')
					op = " & ";
				else if (expression.StartsWith("||"))
					op = " || ";
				else if (expression[0] == '|')
					op = " | ";
				else
					throw new Exception();

				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral()) + op + this.VisitExp(context.exp(0));
			}

			if (context.Number() != null)
				return context.Number().GetText();

			if (context.id() != null)
				return this.VisitId(context.id());

			if (context.arrayLiteral() != null)
				return this.VisitArrayLiteral(context.arrayLiteral());

			if (context.boolean() != null)
				return context.boolean().GetText();

			if (context.GetText().StartsWith("!"))
				return " ! " + this.VisitExp(context.exp(0));

			if (context.str() != null)
				return context.str().GetText();

			if (context.arguments() != null)
				return this.VisitExpNotIncludingObjectLiteral(context.expNotIncludingObjectLiteral()) + this.VisitArguments(context.arguments());

			return base.VisitExpNotIncludingObjectLiteral(context);
		}

		public override string VisitArguments(SquirrelParser.ArgumentsContext context)
		{
			SquirrelParser.ArgumentContext[] contexts = context.GetRuleContexts<SquirrelParser.ArgumentContext>();

			List<string> args = contexts.Select(x => this.VisitArgument(x)).ToList();

			string str = " ( ";

			bool isFirst = true;

			foreach (string arg in args)
			{
				if (isFirst)
					isFirst = false;
				else
					str += " , ";

				str += arg;
			}

			return str + " ) ";
		}

		public override string VisitArgument(SquirrelParser.ArgumentContext context)
		{
			if (context.exp() != null)
				return this.VisitExp(context.exp());

			if (context.id() != null)
				return this.VisitId(context.id());

			return "";
		}

		public override string VisitId(SquirrelParser.IdContext context)
		{
			string str = context.GetText();

			if (str.StartsWith("::"))
				str = str.Substring(2);

			return str;
		}
	}
}
