---
title: Uncountability
weight: 1
---

Consider the set of all binary strings: **B**

Question: Is **B** countably infinite?

Does a bijection exist between $\mathbb{N}$ and **B**?

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

Let's define a 'flipping' function $F:\{0,1\}\rightarrow \{0,1\}$
F(x)=1-x

Consider a special binary string: S(.)=F(L(.,.))

This is the string formed by taking the diagonal from the grid and flipping the bits.

Now since it contains all binary strings, it should also contain S(.)

So $\exists N\in \mathbb{N}$ such that $b_{N}(.)=S(.)$

$$
\begin{align*}
b_{N}(.)=F(L(., .))\\
\text{But }b_{N}(N)=L(N,N)
\end{align*}
$$

Therefore, $S(.)$ doesn't belong in the set of binary strings we considered.

Hence, such a bijection is not possible and **B** is uncountably infinite.
