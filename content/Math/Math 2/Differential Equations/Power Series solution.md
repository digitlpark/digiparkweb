---
title: Power Series solution
weight: 10
---
In case nothing works out for solving differential equations. This is used as a last resort to find a solution.

# Analytic Function

A function f(x) is said to be an analytic function about point x=x₀ if we can write [[Math/Math1/Approximating functions#Taylor Series|taylor series expansion]] about x₀.

## Ordinary point of D.E.
A point x=x₀ is said to be ordinary point of $y''+P(x)y'+Q(x)y=0$ if P,Q are both analytic at x₀

## Singular point of D.E.
If the point is not ordinary it is singular.

### Regular singularity

The following 2 limits must exist and be finite.

$$
\lim _{x\rightarrow x_{0}} (x-x_{0})P(x)
$$
$$
\lim _{x\rightarrow x_{0}} (x-x_{0})^2Q(x)
$$

> Or we can check if both those expressions are analytic at $x_0$


### Irregular singularity

If x₀ is not a [[#Regular singularity]], then it's an irregular singularity.

# Power series
Power series solution at ordinary point.

If x₀ is an ordinary point of the D.E. and has two non trivial [[Math/Math 2/Differential Equations/Linear Higher Order Differential Equations#Homogeneous| linearly independent solutions]] then we consider power series as a trial solution.

$$
\begin{align*}
y=\sum\limits_{n=0}^{\infty} a_{n}(x-x_{0})^{n}\\\\

a_{n}=\frac{D^{n}y(x_{0})}{n!}\\
Radius\ of\ convergence:\ |x-x_{0}|<\lim _{n\rightarrow \infty} \frac{a_{n}}{a_{n+1}}
\end{align*}
$$

We find y' and y'' and substitute it in the D.E. to find the coefficients of the power series.

$$
\begin{align*}
y'&= \sum\limits_{n=1}^{\infty} na_{n}(x-x_{0})^{n-1}\\
y'' &= \sum\limits_{n=2}^{\infty} n(n-1) a_{n}(x-x_{0})^{n-2}
\end{align*}
$$

## At regular singular point

[[Math/Math 2/Differential Equations/Frobenius Method|Frobenius Method]]