---
title: Particular solution of linear higher order ODE
weight: 8
---
Finding the $y_p$ for [[Math/Math 2/Differential Equations/Linear Higher Order Differential Equations#^a77c80|for the particular component of the general solution]]
# Particular Integral P.I.

$y_p(x)$ is also called as particular integral/ particular solution of the non-homogeneous equation.

$$
\begin{align*}
P.I. of\ f(D)y=g(x):\ \\
y_{p}=\frac{1}{f(D)}g(x)
\end{align*}
$$

$\frac{1}{f(D)}$ is the inverse operator of $f(D)$

# Particular Integral of Functions

## case 1

$$
\begin{align*}
y_p=\frac{1}{D-\alpha}g(x)=e^{\alpha x}\int e^{-\alpha x}g(x)dx\\
\\\\

(D-\alpha)y=g(x)\\
\dd{y}{x}-\alpha y=g(x); I.F.=e^{-\alpha x}\\
e^{-\alpha x}y=\int e^{-\alpha x}g(x)dx\ \ [\because [1]]\\
\\
Hence\ proved
\end{align*}
$$
[^1]

## case 2: Exponential shift

$$
\begin{align*}
\frac{1}{f(D)}e^{\alpha x}V(x)=e^{\alpha x} \frac{1}{f(D+\alpha)} V(x)\\
\\
\\
Can\ be\ proved\ with: D^{r}(e^{ax}u)=e^{ax}(D+\alpha)^{r}u
\end{align*}
$$

### case 1 can also be proved using case 2

$$
\begin{align*}
\frac{1}{D-\alpha}g(x)=\frac{1}{D-\alpha}e^{\alpha x}e^{-\alpha x}g(x)\\
=e^{\alpha x} \frac{1}{D-\alpha+\alpha}e^{-\alpha x}g(x)\\
=e^{\alpha x} \frac{1}{D}e^{-\alpha x}g(x)
\end{align*}
$$

### case 3: g(x)=$e^{ax}$

$$
\frac{1}{f(D)}e^{ax}=\frac{1}{f(a)}e^{ax}
$$

If f(a)≠0. If f(a)=0,

$$
\begin{align*}
\frac{1}{f(D)}e^{ax}=\frac{1}{(D-a)^{p}\Phi(D)}e^{ax}\\
\frac{1}{\Phi (a)} \frac{1}{(D-a)^{p}}e^{ax}\\
\frac{1}{\Phi (a)}e^{ax} \frac{1}{(D-a+a)^{p}}1\\
\frac{1}{\Phi (a)}e^{ax} \frac{x^{p}}{p!}
\end{align*}
$$

Alternate solution:

$\frac{1}{f(D)}e^{ax}=x\frac{1}{f'(D)}e^{ax}$
or if f'(a)=0,
$x^{2} \frac{1}{f''(D)}e^{ax}$

### new case g(x)=sin(ax) or cos(ax)

If f(D) is even function. i.e. can be written as F(D^2)
$$
\begin{align*}
\frac{1}{F(D^{2})}\sin(ax)\\
\\
\\
P.I. &= \frac{1}{F(-a^{2})}(\sin ax)
\end{align*}
$$

If f(D) contains odd powers of D
f(D)=f_1(D^2)+f_2(D)

$$
\begin{align*}
\frac{1}{f_{1}(D^{2})+f_{2}(D)} \sin(ax)\\
\frac{1}{f_{1}(-a^{2})+f_{2}(D)} \sin(ax)\\

\end{align*}
$$
[[Math/Math 2/Differential Equations/Examples#2]]
We simplify and multiply and divide by f_3(D), where it contains odd powers of D to make the denominator even.
$$
\begin{align*}
\frac{f_3(D)}{(f_{1}(-a^{2})+f_{2}(D))f_{3}(D)} \sin(ax)\\\\
\frac{f_3(D)}{\Phi (-a^{2})} \sin(ax)
\end{align*}
$$
[[Math/Math 2/Differential Equations/Examples#3]]

If denominator is 0
[[Math/Math 2/Differential Equations/Examples#4]]

### New case g(x)=x^m

$$
\begin{align*}
P.I. = \frac{1}{f(D)} x^m=[f(D)]^{-1}x^m
\end{align*}

$$

Expand f(D)⁻¹ is ascending powers of D as per the terms in $D^m$ and operate on x^m term by term. Since the (m+1)th and higher derivatives of $x^m$ are 0, we need not consider terms beyond $D^m$

Basically have D^0, D^1,...D^m terms.

[[Math/Math 2/Differential Equations/Examples#5]]

#### Expansions

$$
\begin{align*}
\frac{1}{1-x}=1+x+x^{2}+x^{3}+x^{4}\\
\\
\frac{1}{1+x}=1-x+x^{2}-x^{3}+x^{4}
\end{align*}
$$

### g(x)=xV(x)

$$
\text{P.I.= } \frac{1}{f(D)}xV=\left(x-\frac{f'(D)}{f(D)}\right) \frac{1}{f(D)} V
$$

[^1]: [[Math/Math 2/Differential Equations/Linear first order ODEs#Solution]]