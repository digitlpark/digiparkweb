---
title: Linear Higher Order Differential Equations
weight: 6
---
Refer to [[Differential Operator]], [[Linear Dependence of Functions]]

# General form

$$
\begin{align*}
a_{0}D^{n}y+a_{1}D^{n-1}y+a_{2}D^{n-2}y+...+a_{n-1}Dy+a_{n}y=g(x);\ a_k(x)\\
In\ short,\\
f(D)y=g(x)
\end{align*}
$$

If g(x)=0, then it's called a **homogeneous linear ODE**.

## Complementary Function of a Linear Higher Order ODE

$$
C.F.\ of\ f(D)y=g(x)\ is:\ f(D)y=0
$$

# existence? Theorem

The initial value problem given by [[#General form]] and n initial conditions \[$y(x_0)=c_{0};y'(x_0)=c_{1}...D^{n}y(x_{0})=c_{n}$\] where a_i(x) and g(x) are continuous in some interval I containing x₀ and if a₀≠0 in I, then the IVP has a unique solution defined throughout in I.

# Solution

## Homogeneous

The nth order linearly homogeneous ODE f(D)y=0 has n linearly independent solutions: $y_1,y_2,...y_n$, then the general solution of f(D)y=0 is:

$$
y_{c}(x)=c_{1}y_{1}+c_{2}y_{2}+...+c_{n}y_{n}
$$

## Non-homogeneous

The nth order linearly non-homogeneous ODE f(D)y=g(x) has:
* $y_p(x)$: its particular solution ^a77c80
	* 0 arbitrary constants
* $y_c(x)$: [[#Homogeneous|general solution of the associated homogeneous equation]] $f(D)y=0$
	* n arbitrary constants

General solution of it is:

$$y_p(x)+y_c(x)$$

---

[[Math/Math 2/Differential Equations/Associated general solution of C.F.]] + [[Math/Math 2/Differential Equations/Particular solution of linear higher order ODE]]