---
title: Russel's Paradox
weight: 4
---

[Russell's Paradox - A Ripple in the Foundations of Mathematics - YouTube](https://youtu.be/xauCQpnbNAM?t=652)

Sets can contain other sets as well.

Q. Does a set exist that contains itself?

> Feels like the answer should be no, because that would lead to an infinitely nested set. But the answer is yes. We can define a set based on the property of its elements that it can contain.

Example of a set that contains itself: $S= \\\{a|\text{a is not a human}\\\}$

S contains all the things that are not human.
Here, $S\in S$ as S is not a human, it fits the property and therefore belongs to itself.

---

The question that we want to ask ourselves here is: Can we have a set of all sets? A universal set.

> Intuitively, it should be possible. Just collect all the possible sets and put them inside the set

$All= \\\{a|\text{a can be anything}\\\}$

Turns out that the answer to this again goes against intuition, we cannot have a set of all sets.

We show this be constructing a set which leads to a contradiction

$Set= \\\{x|x\notin (x)\\\}$
> Set of all sets that don't contain themselves

If $Set\in Set$ then $Set \notin Set$, and if $Set\notin Set$ then $Set\in Set$

 [[Writeup/Uncountability#Cantors Theorem|Cantor's Theorem]] style of proof

## Proof

G: $\mathbb{A}\times \mathbb{A}\rightarrow${0,1}

$$
G(a_{1},a_{2})= \begin{cases}1\text{ for }a_{2}\in (a_{1}) \\ 0 \text{ otherwise}\end{cases}
$$

We can construct the same set using:
Let f(x)=1-x

S(.)=f(G(.,.))

$Set= \\\{a\in A|S(a)=1\\\}$

### Case 1
If S(Set)=0
$$
\begin{align*}
S(Set)=0\\
G(Set,Set)=1\\
Set\in Set\\
S(Set)=1
\end{align*}
$$

### Case 2
If S(Set)=1
$$
\begin{align*}
S(Set)=1\\
G(Set,Set)=0\\
Set\notin Set\\
S(Set)=0
\end{align*}
$$