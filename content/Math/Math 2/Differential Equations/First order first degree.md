---
title: First order first degree
weight: 2
---
# Many be written as

$$
\begin{align*}
g(y)y'&= f(x)\\
g(y)dy &= f(x)dx\\
\int g(y)dy &= \int f(x)dx +C
\end{align*}
$$

**These are called separable ODEs**

Applications in [[Math/Math 2/Mathematical Modelling|Mathematical Modelling]]
# Homogenous ODE

$$
\begin{align*}
y'=f(y/x)\\
Let\ y=ux:y'=u'x+u\\
So,\ u'x+u=f(u)\\
u'x=f(u)-u\\\\
\frac{du}{f(u)-u}=\frac{dx}{x}
\end{align*}
$$

We made it [[#Many be written as | separable]]
# More general way

$$
\begin{align*}
\dd{y}{x}=f(x)=-\frac{M(x,y)}{N(x,y)}\\
\Leftrightarrow\\
M(x,y)dx+N(x,y)dy=0
\end{align*}
$$

