//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     ANTLR Version: 4.9.3
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Generated from ./web-version-source-code/SquirrelLanguageGrammar/Squirrel.g4 by ANTLR 4.9.3

// Unreachable code detected
#pragma warning disable 0162
// The variable '...' is assigned but its value is never used
#pragma warning disable 0219
// Missing XML comment for publicly visible type or member '...'
#pragma warning disable 1591
// Ambiguous reference in cref attribute
#pragma warning disable 419

using Antlr4.Runtime.Misc;
using Antlr4.Runtime.Tree;
using IToken = Antlr4.Runtime.IToken;

/// <summary>
/// This interface defines a complete generic visitor for a parse tree produced
/// by <see cref="SquirrelParser"/>.
/// </summary>
/// <typeparam name="Result">The return type of the visit operation.</typeparam>
[System.CodeDom.Compiler.GeneratedCode("ANTLR", "4.9.3")]
[System.CLSCompliant(false)]
public interface ISquirrelVisitor<Result> : IParseTreeVisitor<Result> {
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.id"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitId([NotNull] SquirrelParser.IdContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.boolean"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitBoolean([NotNull] SquirrelParser.BooleanContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.whileKeyword"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitWhileKeyword([NotNull] SquirrelParser.WhileKeywordContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.str"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitStr([NotNull] SquirrelParser.StrContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.derefexp"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitDerefexp([NotNull] SquirrelParser.DerefexpContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.stats"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitStats([NotNull] SquirrelParser.StatsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.statincludingemptystatement"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitStatincludingemptystatement([NotNull] SquirrelParser.StatincludingemptystatementContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.functionDeclaration"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitFunctionDeclaration([NotNull] SquirrelParser.FunctionDeclarationContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.functionParameter"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitFunctionParameter([NotNull] SquirrelParser.FunctionParameterContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.stat"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitStat([NotNull] SquirrelParser.StatContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.breakStatement"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitBreakStatement([NotNull] SquirrelParser.BreakStatementContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.switchCaseStatement"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitSwitchCaseStatement([NotNull] SquirrelParser.SwitchCaseStatementContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.statNotIncludingObjectLiteral"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitStatNotIncludingObjectLiteral([NotNull] SquirrelParser.StatNotIncludingObjectLiteralContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.arrayLiteral"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitArrayLiteral([NotNull] SquirrelParser.ArrayLiteralContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.initz"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitInitz([NotNull] SquirrelParser.InitzContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.negativeSign"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitNegativeSign([NotNull] SquirrelParser.NegativeSignContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.incrementOperator"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitIncrementOperator([NotNull] SquirrelParser.IncrementOperatorContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.decrementOperator"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitDecrementOperator([NotNull] SquirrelParser.DecrementOperatorContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.equalequal"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitEqualequal([NotNull] SquirrelParser.EqualequalContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.notequal"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitNotequal([NotNull] SquirrelParser.NotequalContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.arrayIndexing"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitArrayIndexing([NotNull] SquirrelParser.ArrayIndexingContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.openParen"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitOpenParen([NotNull] SquirrelParser.OpenParenContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.closeParen"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitCloseParen([NotNull] SquirrelParser.CloseParenContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.deleteKeyword"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitDeleteKeyword([NotNull] SquirrelParser.DeleteKeywordContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.objectLiteral"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitObjectLiteral([NotNull] SquirrelParser.ObjectLiteralContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.propertyAssignment"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitPropertyAssignment([NotNull] SquirrelParser.PropertyAssignmentContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.exp"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitExp([NotNull] SquirrelParser.ExpContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.openSquareBracket"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitOpenSquareBracket([NotNull] SquirrelParser.OpenSquareBracketContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.typeOf"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitTypeOf([NotNull] SquirrelParser.TypeOfContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.ternaryOperator"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitTernaryOperator([NotNull] SquirrelParser.TernaryOperatorContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.classStatements"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitClassStatements([NotNull] SquirrelParser.ClassStatementsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.classVariableDeclaration"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitClassVariableDeclaration([NotNull] SquirrelParser.ClassVariableDeclarationContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.classConstructorDeclaration"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitClassConstructorDeclaration([NotNull] SquirrelParser.ClassConstructorDeclarationContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.classConstructorArgs"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitClassConstructorArgs([NotNull] SquirrelParser.ClassConstructorArgsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.classConstructorArg"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitClassConstructorArg([NotNull] SquirrelParser.ClassConstructorArgContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.classFunctionDeclaration"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitClassFunctionDeclaration([NotNull] SquirrelParser.ClassFunctionDeclarationContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.instanceofOperator"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitInstanceofOperator([NotNull] SquirrelParser.InstanceofOperatorContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.cloneOperator"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitCloneOperator([NotNull] SquirrelParser.CloneOperatorContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.expNotIncludingObjectLiteral"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitExpNotIncludingObjectLiteral([NotNull] SquirrelParser.ExpNotIncludingObjectLiteralContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.assignmentModificationOperator"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitAssignmentModificationOperator([NotNull] SquirrelParser.AssignmentModificationOperatorContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.arguments"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitArguments([NotNull] SquirrelParser.ArgumentsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="SquirrelParser.argument"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitArgument([NotNull] SquirrelParser.ArgumentContext context);
}
