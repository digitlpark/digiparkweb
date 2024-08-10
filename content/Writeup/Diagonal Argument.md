We can summarize the proof of [[Writeup/Uncountability|Uncountability]], [[Writeup/Halting Problem|Halting Problem]] in one category theory proof

## Uncountability

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

## Halting Problem

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