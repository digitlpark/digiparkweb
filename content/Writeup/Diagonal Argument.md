---
title: Diagonal Argument
weight: 5
---
We can summarize the proof of [[Writeup/Uncountability|Uncountability]], [[Writeup/Uncountability#Cantors Theorem|Cantor's Theorem]] , [[Writeup/Halting Problem|Halting Problem]], [[Writeup/Russel's Paradox|Russel's Paradox]] in one category theory proof

The proofs can be represented in a similar ways abstractifying them into a structure. All of them have the common elements:
- A flipping mechanism
- A 'powerful' function satisfying a property
- A looping/recursive mechanism utilizing the function, in order to create a contradiction

> Diagonalization function D(.)=(.,.)
> So, L(D(.))=L(.,.)

## Uncountability

[[Writeup/Uncountability|Uncountability]]

{{< mermaid >}}
graph LR
subgraph .
	c[N] --diag--> a[N X N]
end
subgraph ..
	b["{0,1}"] --f--> d["{0,1}"]
end
c --special--> d
a--L-->b

{{< /mermaid >}}

S(.)=F(L(D(.)))

L is exhaustive

> S(.) isn't in one of the binary strings encoded by L, thereby contradicting its property

## Halting Problem

[[Writeup/Halting Problem|Halting Problem]]

{{< mermaid >}}
graph LR
subgraph .
	c[N] --diag--> a[N X N]
end
subgraph ..
	b[N] --f--> d[N]
end
c --special--> d
a--A-->b

{{< /mermaid >}}

Here N is the numeric representation of program

S(.)=F(A(D(.)))

A is total and powerful (Can identify whether any given program will halt)

> S cannot halt, and S cannot not halt creating a contradiction to the assumption for the existence of A

## Cantor's Theorem

[[Writeup/Uncountability#Cantors Theorem|Cantor's Theorem]]

{{< mermaid >}}
graph LR
subgraph .
	c[A] --diag--> a[A X A]
end
subgraph ..
	b["{0,1}"] --f--> d["{0,1}"]
end
c --special--> d
a--G-->b

{{< /mermaid >}}

S(.)=f(G(D(.)))

The onto function **g** corresponds to the function G which covers all the subsets of A

> Constructing a set $Set= \\\{a\in A|S(a)=1\\\}$ would violate the existence of **g**

## Russel's Paradox

[[Writeup/Russel's Paradox|Russel's Paradox]]

{{< mermaid >}}
graph LR
subgraph .
	c[A] --diag--> a[A X A]
end
subgraph ..
	b["{0,1}"] --f--> d["{0,1}"]
end
c --special--> d
a--CONTAINS-->b

{{< /mermaid >}}

S(.)=f(Contains(D(.)))

Contains(A,B) would check if A is in B

> Constructing a set $Set= \\\{a\in A|S(a)=1\\\}$ and checking S(Set) would lead to a contradiction

# Lawvere's Theorem

Inspiration: [What A General Diagonal Argument Looks Like (Category Theory) - YouTube](https://youtu.be/dwNxVpbEVcc)

{{< mermaid >}}
graph LR
subgraph .
	c[Things] --diag--> a[Things X Things]
end
subgraph ..
	b[Values] --f--> d[Values]
end
c --special--> d
a--powerful-->b

{{< /mermaid >}}

In a particular class of categories, having such a point surjective arrow results in the arrow 'f' having a special property

## Diagonal Arguments

The flipping functions in both the examples that we created helps contradict the Lawvere's Theorem

All diagonal arguments use the Lawvere's theorem as part of the proof