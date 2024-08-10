---
title: Linear first order ODEs
weight: 4
---
A [[Math/Math 2/Differential Equations/First order first degree#More general way|first order ODE]] is said to be **linear** if it can be brought into the form

$$
y'+P(x)y=Q(x)
$$

It's called "homogeneous linear first order ODE" when Q(x)=0

# Solution

$$
\begin{align*}
P(x)ydx+dy=Q(x)dx\\
(Py-Q)dx+dy=0\\
I.F. = e^{\int Pdx}=e^h\\
\\
Solution: \int M + \int (terms\ of\ N\ not\ containing\ x)\\
\int e^{\int Pdx}[Py-Q]dx=0\\
\int e^{\int Pdx}Py\ dx=\int e^hQ\ dx\\
Since,\ d(e^{h})=Pe^{\int P dx}=Pe^{h}dx\\
\int yd(e^h)=\int hQ dx\\\\
\\

ye^h=\int e^h Q dx +c\ or\\
y(x)=e^{-h}\left(\int e^{h}Q dx +c\right)\\
I.F.y=\int I.F.Qdx +c
\end{align*}
$$
We use [[Math/Math 2/Differential Equations/Exact ODE and Integrating Factors|Exact ODE and Integrating Factors#If I.F. is a function of x]] in the third line

# Bernoulli's Equation

Nonlinear ODE → Linear ODE
$$
\begin{align*}
y'+P(x)\ y&= Q(x)y^a\\
transformed\ to\ \\
u'+(1-a)P\ u &= (1-a)Q(x)\\
[u=y^{1-a}]
\end{align*}
$$