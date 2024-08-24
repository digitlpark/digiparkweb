---
title: Uncountability
weight: 2
---

Consider the set of all binary strings: **B**

Question: Is **B** countably infinite?

## Setup

It's same as asking the question: Does a bijection exist between $\mathbb{N}$ and **B**?

For the time being, let us assume that there exists such a bijection.

On one column we have natural numbers, and on the other we have all binary strings listed down...

N | B
--- | ---
1 | 01010100101010001...
2 | 1101010111011110101...
3 | 001101011100001010...
... | ...

Let there be a function L(i,j) encoding this bijection.

L(i,j) returns the jth digit at the ith row

L: $\mathbb{N}\times \mathbb{N}\rightarrow${0,1}

nth binary string: $b_n(.)=L(n,.)$

## Climax

Let's define a 'flipping' function $F:\{0,1\}\rightarrow \{0,1\}$
F(x)=1-x

Consider a special binary string: S(.)=F(L(.,.))

This is the string formed by taking the diagonal from the grid and flipping the bits.

Now since **B** contains all binary strings, it should also contain S(.)

So $\exists N\in \mathbb{N}$ such that $b_{N}(.)=S(.)$

$$
\begin{align*}
b_{N}(.)=F(L(., .))\\
\text{But }b_{N}(N)=L(N,N)
\end{align*}
$$

Therefore, $S(.)$ doesn't belong in the set of binary strings we considered.

Hence, such a bijection is not possible and **B** is uncountably infinite.

# Cantors Theorem

The proof for uncountability can be replicated for [[Writeup/Cantors Theorem|Cantors Theorem]]

## Setup

Each of the binary strings can be corresponded with a subset and vice-versa, where the position of 1s dictate what elements are in the subset

A | G(.,{a1,a2,...}) | g(.)
--- | --- | ---
a1 | 01010... | {a2,a4}
a2 | 11010... | {a1,a2,a4}
a3 | 00110... | {a3,a4}
... | ...

### Subset to Binary encoding

The onto function **g** in [[Writeup/Cantors Theorem|Cantors Theorem]] can be encoded with 'G'

G: $\mathbb{A}\times \mathbb{A}\rightarrow${0,1}

$$
G(a_{1},a_{2})=\begin{cases}1\text{ for }a_{2}\in g(a_{1})\\ 0  \text{ otherwise}\end{cases}
$$

### Binary encoding to Subset

$$
g(a_{1})=\\\{ a_{2}\in A | G(a_{1},a_{2})=1 \\\}
$$

## Climax



The set that creates a contradiction is 
$Set= \\\{x\in A|x\notin g(x)\\\}$

because this set cannot be in the range of **g**, which contradicts the fact that **g** is onto.

We can construct the same set using:
Let f(x)=1-x

S(.)=f(G(.,.))

$Set= \\\{a\in A|S(a)=1\\\}$

Assuming that S is in the range of **g**, $\exists x\in A(g(x)=S)$

### Case 1

$x\in S$

$$
\begin{align*}
f(G(x,x))=1\\
G(x,x)=0\\
x\notin g(x)=S
\end{align*}
$$

### Case 2

$x\notin S$

$$
\begin{align*}
f(G(x,x))=0\\
G(x,x)=1\\
x\in g(x)=S
\end{align*}
$$

## Conclusion

Since no such onto function **g** can exist from $A\rightarrow P(A)$, $|P(A)|>|A|$

Therefore, if A=$\mathbb{N}$, then the cardinality of its power set is a different kind of infinity (uncountably infinite)