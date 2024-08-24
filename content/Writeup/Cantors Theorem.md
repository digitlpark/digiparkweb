---
title: Cantors Theorem
weight: 1
---

Can be there an onto function from $A\rightarrow P(A)$?

Assume that there exists an onto function $g:A\rightarrow P(A)$

Construct a set
$S= \\{x\in A|x\notin g(x)\\}$

Since g is onto, an $s\in P(A)$ has a preimage, i.e. $\exists x\in A(g(x)=S)$

## Contradiction

Let's analyze if $x\in S$

Assume $x\in S$
$x\notin g(x)\Rightarrow x\notin S$
Contradiction!

Assume $x\notin  S$
$x\in g(x)\Rightarrow x\in S$
Contradiction!

## Conclusion

No onto function exists from $A\rightarrow P(A)$

Therefore, $|A|<|P(A)|$