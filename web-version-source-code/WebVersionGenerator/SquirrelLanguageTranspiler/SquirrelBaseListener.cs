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
using IErrorNode = Antlr4.Runtime.Tree.IErrorNode;
using ITerminalNode = Antlr4.Runtime.Tree.ITerminalNode;
using IToken = Antlr4.Runtime.IToken;
using ParserRuleContext = Antlr4.Runtime.ParserRuleContext;

/// <summary>
/// This class provides an empty implementation of <see cref="ISquirrelListener"/>,
/// which can be extended to create a listener which only needs to handle a subset
/// of the available methods.
/// </summary>
[System.CodeDom.Compiler.GeneratedCode("ANTLR", "4.9.3")]
[System.Diagnostics.DebuggerNonUserCode]
[System.CLSCompliant(false)]
public partial class SquirrelBaseListener : ISquirrelListener {
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.id"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterId([NotNull] SquirrelParser.IdContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.id"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitId([NotNull] SquirrelParser.IdContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.boolean"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterBoolean([NotNull] SquirrelParser.BooleanContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.boolean"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitBoolean([NotNull] SquirrelParser.BooleanContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.whileKeyword"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterWhileKeyword([NotNull] SquirrelParser.WhileKeywordContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.whileKeyword"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitWhileKeyword([NotNull] SquirrelParser.WhileKeywordContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.str"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterStr([NotNull] SquirrelParser.StrContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.str"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitStr([NotNull] SquirrelParser.StrContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.derefexp"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterDerefexp([NotNull] SquirrelParser.DerefexpContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.derefexp"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitDerefexp([NotNull] SquirrelParser.DerefexpContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.stats"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterStats([NotNull] SquirrelParser.StatsContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.stats"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitStats([NotNull] SquirrelParser.StatsContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.statincludingemptystatement"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterStatincludingemptystatement([NotNull] SquirrelParser.StatincludingemptystatementContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.statincludingemptystatement"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitStatincludingemptystatement([NotNull] SquirrelParser.StatincludingemptystatementContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.functionDeclaration"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterFunctionDeclaration([NotNull] SquirrelParser.FunctionDeclarationContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.functionDeclaration"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitFunctionDeclaration([NotNull] SquirrelParser.FunctionDeclarationContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.functionParameter"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterFunctionParameter([NotNull] SquirrelParser.FunctionParameterContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.functionParameter"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitFunctionParameter([NotNull] SquirrelParser.FunctionParameterContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.stat"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterStat([NotNull] SquirrelParser.StatContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.stat"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitStat([NotNull] SquirrelParser.StatContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.breakStatement"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterBreakStatement([NotNull] SquirrelParser.BreakStatementContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.breakStatement"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitBreakStatement([NotNull] SquirrelParser.BreakStatementContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.switchCaseStatement"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterSwitchCaseStatement([NotNull] SquirrelParser.SwitchCaseStatementContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.switchCaseStatement"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitSwitchCaseStatement([NotNull] SquirrelParser.SwitchCaseStatementContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.statNotIncludingObjectLiteral"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterStatNotIncludingObjectLiteral([NotNull] SquirrelParser.StatNotIncludingObjectLiteralContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.statNotIncludingObjectLiteral"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitStatNotIncludingObjectLiteral([NotNull] SquirrelParser.StatNotIncludingObjectLiteralContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.arrayLiteral"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterArrayLiteral([NotNull] SquirrelParser.ArrayLiteralContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.arrayLiteral"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitArrayLiteral([NotNull] SquirrelParser.ArrayLiteralContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.initz"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterInitz([NotNull] SquirrelParser.InitzContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.initz"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitInitz([NotNull] SquirrelParser.InitzContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.negativeSign"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterNegativeSign([NotNull] SquirrelParser.NegativeSignContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.negativeSign"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitNegativeSign([NotNull] SquirrelParser.NegativeSignContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.incrementOperator"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterIncrementOperator([NotNull] SquirrelParser.IncrementOperatorContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.incrementOperator"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitIncrementOperator([NotNull] SquirrelParser.IncrementOperatorContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.decrementOperator"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterDecrementOperator([NotNull] SquirrelParser.DecrementOperatorContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.decrementOperator"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitDecrementOperator([NotNull] SquirrelParser.DecrementOperatorContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.equalequal"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterEqualequal([NotNull] SquirrelParser.EqualequalContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.equalequal"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitEqualequal([NotNull] SquirrelParser.EqualequalContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.notequal"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterNotequal([NotNull] SquirrelParser.NotequalContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.notequal"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitNotequal([NotNull] SquirrelParser.NotequalContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.arrayIndexing"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterArrayIndexing([NotNull] SquirrelParser.ArrayIndexingContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.arrayIndexing"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitArrayIndexing([NotNull] SquirrelParser.ArrayIndexingContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.openParen"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterOpenParen([NotNull] SquirrelParser.OpenParenContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.openParen"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitOpenParen([NotNull] SquirrelParser.OpenParenContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.closeParen"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterCloseParen([NotNull] SquirrelParser.CloseParenContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.closeParen"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitCloseParen([NotNull] SquirrelParser.CloseParenContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.objectLiteral"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterObjectLiteral([NotNull] SquirrelParser.ObjectLiteralContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.objectLiteral"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitObjectLiteral([NotNull] SquirrelParser.ObjectLiteralContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.propertyAssignment"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterPropertyAssignment([NotNull] SquirrelParser.PropertyAssignmentContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.propertyAssignment"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitPropertyAssignment([NotNull] SquirrelParser.PropertyAssignmentContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.exp"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterExp([NotNull] SquirrelParser.ExpContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.exp"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitExp([NotNull] SquirrelParser.ExpContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.openSquareBracket"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterOpenSquareBracket([NotNull] SquirrelParser.OpenSquareBracketContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.openSquareBracket"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitOpenSquareBracket([NotNull] SquirrelParser.OpenSquareBracketContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.typeOf"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterTypeOf([NotNull] SquirrelParser.TypeOfContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.typeOf"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitTypeOf([NotNull] SquirrelParser.TypeOfContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.ternaryOperator"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterTernaryOperator([NotNull] SquirrelParser.TernaryOperatorContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.ternaryOperator"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitTernaryOperator([NotNull] SquirrelParser.TernaryOperatorContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.classStatements"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterClassStatements([NotNull] SquirrelParser.ClassStatementsContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.classStatements"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitClassStatements([NotNull] SquirrelParser.ClassStatementsContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.classVariableDeclaration"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterClassVariableDeclaration([NotNull] SquirrelParser.ClassVariableDeclarationContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.classVariableDeclaration"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitClassVariableDeclaration([NotNull] SquirrelParser.ClassVariableDeclarationContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.classConstructorDeclaration"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterClassConstructorDeclaration([NotNull] SquirrelParser.ClassConstructorDeclarationContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.classConstructorDeclaration"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitClassConstructorDeclaration([NotNull] SquirrelParser.ClassConstructorDeclarationContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.classConstructorArgs"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterClassConstructorArgs([NotNull] SquirrelParser.ClassConstructorArgsContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.classConstructorArgs"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitClassConstructorArgs([NotNull] SquirrelParser.ClassConstructorArgsContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.classConstructorArg"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterClassConstructorArg([NotNull] SquirrelParser.ClassConstructorArgContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.classConstructorArg"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitClassConstructorArg([NotNull] SquirrelParser.ClassConstructorArgContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.classFunctionDeclaration"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterClassFunctionDeclaration([NotNull] SquirrelParser.ClassFunctionDeclarationContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.classFunctionDeclaration"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitClassFunctionDeclaration([NotNull] SquirrelParser.ClassFunctionDeclarationContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.expNotIncludingObjectLiteral"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterExpNotIncludingObjectLiteral([NotNull] SquirrelParser.ExpNotIncludingObjectLiteralContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.expNotIncludingObjectLiteral"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitExpNotIncludingObjectLiteral([NotNull] SquirrelParser.ExpNotIncludingObjectLiteralContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.assignmentModificationOperator"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterAssignmentModificationOperator([NotNull] SquirrelParser.AssignmentModificationOperatorContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.assignmentModificationOperator"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitAssignmentModificationOperator([NotNull] SquirrelParser.AssignmentModificationOperatorContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.arguments"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterArguments([NotNull] SquirrelParser.ArgumentsContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.arguments"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitArguments([NotNull] SquirrelParser.ArgumentsContext context) { }
	/// <summary>
	/// Enter a parse tree produced by <see cref="SquirrelParser.argument"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void EnterArgument([NotNull] SquirrelParser.ArgumentContext context) { }
	/// <summary>
	/// Exit a parse tree produced by <see cref="SquirrelParser.argument"/>.
	/// <para>The default implementation does nothing.</para>
	/// </summary>
	/// <param name="context">The parse tree.</param>
	public virtual void ExitArgument([NotNull] SquirrelParser.ArgumentContext context) { }

	/// <inheritdoc/>
	/// <remarks>The default implementation does nothing.</remarks>
	public virtual void EnterEveryRule([NotNull] ParserRuleContext context) { }
	/// <inheritdoc/>
	/// <remarks>The default implementation does nothing.</remarks>
	public virtual void ExitEveryRule([NotNull] ParserRuleContext context) { }
	/// <inheritdoc/>
	/// <remarks>The default implementation does nothing.</remarks>
	public virtual void VisitTerminal([NotNull] ITerminalNode node) { }
	/// <inheritdoc/>
	/// <remarks>The default implementation does nothing.</remarks>
	public virtual void VisitErrorNode([NotNull] IErrorNode node) { }
}