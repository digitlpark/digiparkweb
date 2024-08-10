

Inspired by: [Math's Fundamental Flaw - YouTube](https://youtu.be/HeQX2HjkcNo?t=1362)

We know Turing machines are theoretically capable of executing any possible program. (hence the term turing-complete)
> Q: Does a turing program exist that can say whether or not a program will halt or not?

Let's assume this amazing program exists and call it A
A:(program,input)->{0,1}
returns 0 if program(input) halts and 1 if it doesn't.

> Although A is a program, it's like a mathematical function which takes in an input (program,input) and returns 0 or 1.
> 
> Note: Programs are just data, they have underlying numeric representation. When inputting a program into another program/function, treat it to inputting their numeric representation.

So A(A,(program,input))=0 ∀ programs,input pairs

Create a program S:(input,input)=halts if A(input,input) == 1, otherwise it goes into an infinite loop.

So A(S,program)=1-A(program,program) ∀ programs

Now the question is, what will A(S,S) return?
Here, we're inputting the program S as program and input to A again

If A(S,S) returns 0, then that means S halts on S. Implies that A(S,S) == 1, so S would not halt on S.
If A(S,S) returns 1, then that means S doesn't halt on S. Implies that A(S,S) == 0, so S would halt on S.

Basically, whatever output of A(S,S) we assume, leads to a contradiction.

So our assumption that A exists was incorrect.

Therefore, we can never construct an algorithm 'A' that can decide whether a program will halt on an input (in all cases)

This property of not being able to decide if a program will halt or not, is not specific to only this decidability question. In general, we wouldn't be able to theoretically construct an algorithm that can perfectly decide a given property of a program.

Refer to the article - [Why Building a Perfect Compiler is Theoretically Impossible](https://bhavyahirani.wordpress.com/2024/06/27/why-building-a-perfect-compiler-is-theoretically-impossible/)

