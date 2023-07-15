---
title: Solving linear PDEs
weight: 2
---
[[Math/Math 2/Partial Differential Equation/PDE#Classification of a PDE]]

General solution for a linear PDE:

$Pp+Qq=R$

$$
\begin{align*}
F(u,v)=0\\
u(x,y,z)=c_{1}; v(x,y,z)=c_{2}\\
\text{constants found by auxilary eq:}\\
\frac{dx}{P}=\frac{dy}{Q}=\frac{dz}{R}
\end{align*}
$$

# Cases

## When we can find two cs

One of the variables is either absent or cancels out from the set of auxilary equation

## When we can find only one c

We use the $c_1$ found and substitute in another relation and solve and replace back $c_1$ by its function in order to find $c_2$.

## Lagrangian multipliers

$$
\begin{align*}
\frac{dx}{P}=\frac{dy}{Q}=\frac{dz}{R}=\frac{P_1dx+Q_1dy+R_1dz}{P_1P+Q_1Q+R_1R}
\end{align*}
$$

- if the denominator is 0, we can just integrate the numerator to find a constant.
- or we can choose $P_1,Q_1,R_1$ such that the numerator is an exact differential of the denominator
