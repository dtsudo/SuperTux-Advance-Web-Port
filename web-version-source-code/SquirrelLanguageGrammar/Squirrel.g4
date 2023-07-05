
grammar Squirrel;

id 
	: Id 
	| '::' Id
	;

LeftBrace
	: '{'
	;
	
RightBrace
	: '}'
	;
 
If
	: 'if'
	;
	
Else
	: 'else'
	;
	
While
	: 'while'
	;
	
Id
	: [a-zA-Z_]+ 
	| [a-zA-Z_][a-zA-Z0-9_]+ 
	;

Number
	: [0-9.]+ 
	| '0x' [0-9abcdefABCDEF]+
	;

boolean
	: 'true'
	| 'false'
	;

whileKeyword
	: While
	;

str
	: Str
	;
	
Str
	: '"' ~('"')* '"'
	| '\'' ~('\'')* '\''
	;

derefexp
	: id
	| id '.' id
	| id '[' exp ']'
	;

stats
	: statincludingemptystatement ( (';' | '\n') statincludingemptystatement )*
	;
	
statincludingemptystatement
	: stat
	| ';'
	| '\n'
	| 
	;
	
functionDeclaration
	: 'function' '(' '\n'* functionParameter* ')' '\n'? '{' stats '}' 
	;
	
functionParameter
	: ','? id ','? '\n'*
	| ','? id '=' exp ','? '\n'*
	;
	
stat
	: statNotIncludingObjectLiteral
	| objectLiteral
	;
	
breakStatement
	: 'break'
	;
	
switchCaseStatement
	: ( 'case' exp ':' | 'default' ':' ) stats
	;
	
statNotIncludingObjectLiteral 
	: 'local' initz 
	| 'const' initz
	| breakStatement
	| 'switch' '(' exp ')' '\n'* '{' '\n'* switchCaseStatement+ '}'
	| whileKeyword '(' exp ')' '\n'* stat
	| If '(' exp ')' '\n'* statNotIncludingObjectLiteral (';')? ('\n')* (Else '\n'* statNotIncludingObjectLiteral)?
	| expNotIncludingObjectLiteral
	| 'return'
	| 'return' exp
	| LeftBrace stats RightBrace
	| 'for' '(' stat ';' exp ';' exp ')' '\n'* statNotIncludingObjectLiteral
	| 'foreach' '(' (id ',')? id 'in' exp ')' '\n'* statNotIncludingObjectLiteral
	;
	
arrayLiteral
	: '[' '\n'* exp ('\n'? (','|'\n') '\n'* exp)* '\n'* ']'
	| '[' '\n'* ']'
	;
	
initz
	: id ('=' exp)? (',' initz)?
	;

negativeSign
	: '-'
	;

incrementOperator
	: '++'
	;

decrementOperator
	: '--'
	;

equalequal
	: '=='
	;

notequal
	: '!='
	;

arrayIndexing 
	: '[' exp ']'
	;

openParen
	: '('
	;
	
closeParen
	: ')'
	;

objectLiteral
	: '{' '\n'* (propertyAssignment ( (',' | '\n') '\n'* propertyAssignment)* )? '\n'* '}'
	;
	
propertyAssignment
	: id '=' exp
	| str ':' exp
	;
	
exp
	: expNotIncludingObjectLiteral
	| objectLiteral
	;
	
openSquareBracket
	: '['
	;

typeOf
	: 'typeof' id openSquareBracket exp ']'
	| 'typeof' id openParen closeParen openSquareBracket exp ']'
	| 'typeof' id openParen closeParen
	| 'typeof' id
	;

ternaryOperator
	: '?'
	;
	
classStatements
	: ( '\n'* (classVariableDeclaration | classConstructorDeclaration | classFunctionDeclaration) '\n'* )* '\n'*
	;
	
classVariableDeclaration
	: id '=' exp
	;
	
classConstructorDeclaration
	: 'constructor' '(' classConstructorArgs ')' '\n'* '{' stats '}'
	;
	
classConstructorArgs
	: classConstructorArg ( ',' classConstructorArg )*
	| 
	;

classConstructorArg
	: id
	| id '=' exp
	;
	
classFunctionDeclaration
	: 'function' id '(' functionParameter* ')' '\n'? '{' stats '}' 
	;
	
expNotIncludingObjectLiteral 
	: Number 
	| id
	| boolean
	| str
	| '!' exp
	| 'class' ('extends' id)? '{' classStatements '}'
	| 'base' '.' 'constructor' arguments
	| 'base' '.' id arguments
	| expNotIncludingObjectLiteral equalequal exp
	| expNotIncludingObjectLiteral notequal exp
	| negativeSign exp
	| expNotIncludingObjectLiteral arrayIndexing
	| typeOf
	| expNotIncludingObjectLiteral incrementOperator
	| expNotIncludingObjectLiteral decrementOperator
	| expNotIncludingObjectLiteral ternaryOperator exp ':' exp
	| expNotIncludingObjectLiteral '.' id
	| expNotIncludingObjectLiteral '*' exp
	| expNotIncludingObjectLiteral '/' exp
	| expNotIncludingObjectLiteral '%' exp
	| expNotIncludingObjectLiteral '+' exp
	| expNotIncludingObjectLiteral '-' exp
	| expNotIncludingObjectLiteral '>>' exp
	| expNotIncludingObjectLiteral '<<' exp
	| expNotIncludingObjectLiteral '<=>' exp
	| expNotIncludingObjectLiteral '<=' exp
	| expNotIncludingObjectLiteral '>=' exp
	| expNotIncludingObjectLiteral '<' exp
	| expNotIncludingObjectLiteral '>' exp
	| expNotIncludingObjectLiteral '\n'* '&&' exp
	| expNotIncludingObjectLiteral '&' exp
	| expNotIncludingObjectLiteral '\n'* '||' exp
	| expNotIncludingObjectLiteral '|' exp
	| expNotIncludingObjectLiteral 'in' exp
	| openParen exp closeParen
	| expNotIncludingObjectLiteral '.' id '=' exp
	| expNotIncludingObjectLiteral '.' id '<-' exp
	| expNotIncludingObjectLiteral openSquareBracket exp ']' '=' exp
	| expNotIncludingObjectLiteral openSquareBracket exp ']' '<-' exp
	| derefexp assignmentModificationOperator exp
	| derefexp '=' exp 
	| derefexp '<-' exp 
	| expNotIncludingObjectLiteral arguments
	| arrayLiteral
	| functionDeclaration
	;
	
assignmentModificationOperator
	: '+='
	| '-='
	| '*='
	| '/='
	;
	
arguments
	: '(' '\n'* (argument '\n'* (',' '\n'* argument)* )?  ')'
	;
	
argument
	: exp | id
	;

WS
	: [ \t\r]+
	-> skip
	;

MultiLineComment
	: '/*' .*? '*/'
	-> channel(HIDDEN)
	;
	
SingleLineComment
	: '//' ~[\r\n]*
	-> channel(HIDDEN)
	;
