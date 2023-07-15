---
title: Exact ODE and Integrating Factors
weight: 3
---
# Exact differential equation

A differential equation of the form [[Math/Math 2/Differential Equations/First order first degree#More general way|M(x,y)dx+N(x,y)dy=0]] is said to be exact if its left hand member is the exact differential of some function Φ(x,y)

$$
\begin{align*}
d\Phi=Mdx+Ndy\\
Also, d\Phi=\pd{\Phi}{x}d x+\pd{\Phi}{y}d y
\end{align*}
$$
So has to be the case that $\pd{\Phi}{x}=M$ and $\pd{\Phi}{y}=N$

## Testing for exactness

Theorem:

> The [[Necessary and Sufficient Condition|necessary and sufficient condition]] for the differential equation Mdx+Ndy=0 to be exact is $$\pd{M}{y}=\pd{N}{x}$$

### Proof:

#### Necessary condition
The necessary condition for the differential equation to be exact is: $\pd{M}{y}=\pd{N}{x}$

We need to prove that if differential equation is exact ⇒ ($\pd{M}{y}=\pd{N}{x}$) 

$$
\begin{align*}
Assume\ Mdx+Ndy=0\ is\ exact\\
\exists \Phi(x,y)s.t. d\Phi=Mdx+Ndy=0\\
\therefore M=\pd{\Phi}{x}; N=\pd{\Phi}{y}\\
\Rightarrow \pd{M}{y}=\pd{N}{x}=\pd{^2\Phi}{xy}
\end{align*}
$$

#### Sufficient condition
The sufficient condition for the differential condition to be exact is: $\pd{M}{y}=\pd{N}{x}$
We need to prove that if ($\pd{M}{y}=\pd{N}{x}$) ⇒ differential equation is exact

$$
\begin{align*}
Let \int Mdx&= u\\
\pd{u}{x}&= M\\
Given:\pd{M}{y}&= \pd{N}{x}\\
\pd{^2u}{xy} &= \pd{N}{x}\\
N&= \pd{u}{dy}+f(y)\ \ -(1)\\
Now, Mdx+Ndy &= \pd{u}{x}dx+(\pd{u}{y}+f(y))dy\\
&= d\left(u+\int f(y)dy\right)=d\Phi
\end{align*}
$$
Shows that Mdx+Ndy=0 is an exact D.E.

# Solution

Find M and N, coeffs of dx, dy respectively

$$
\begin{align*}
\Phi &= \int M dx+k(y)\\
\dd{\Phi}{y}&= \dd{\int M dx}{y}+k'(y)=N\\
k'(y)&= N-\dd{\int M dx}{y}\\
k(y)&= \int N-\dd{\int M dx}{y} dy
\end{align*}
$$

## Quick solution

Solution of the D.E. Mdx+Ndy=0 is

$$
\int M dx + \int (terms\ of\ N\ not\ containing\ x)dy=0
$$

# Finding Integrating factor

Say we have a nonexact ODE $Mdx+Ndy=0$ where M and N are functions of x,y. ***Integrating factor*** of this ODE is a function F(x,y) where $MFdx+NFdy=0$ becomes an exact ODE.

## Find I.F. by inspection

$$
\begin{align*}
xdy+ydx &= d(xy)\\
\frac{xdy-ydx}{x^{2}}&= d(\frac{y}{x})\\
\frac{xdy-ydx}{y^{2}} &= d(\frac{x}{y})\\
\frac{xdy-ydx}{xy}&= d(\ln(\frac{y}{x}))\\
\frac{xdy-ydx}{x^{2}+y^{2}} &= d(\arctan(\frac{y}{x}))
\end{align*}
$$

## Exactness condition

> Say Mdx+Ndy=0 is non exact

$$
\begin{align*}
\pd{MF}{y}=\pd{NF}{x}\\
M_yF+MF_y=N_xF+NF_x
\end{align*}
$$

## If I.F. is a function of x

$$
\begin{align*}
M_yF=N_xF+NF_x\\
(M_y-N_x)F=NF_x\\
\frac{M_{y}-N_{x}}{N}=\frac{F_{x}}{F}=R\\
I.F.=F(x)=e^{\int R(x) dx} 
\end{align*}
$$

## If I.F. is a function of y

$$
\begin{align*}
M_yF+MF_y=N_xF\\
(M_y-N_x)F=-MF_y\\
\frac{M_{y}-N_{x}}{M}=\frac{-F_{y}}{F}=R\\
I.F.=F(y)=e^{-\int R(y)dy}
\end{align*}
$$

## Special Cases

### If M, N are homogeneous functions of degree n

$$
\begin{align*}
I.F. &=  \frac{1}{Mx+Ny}\\
if\ denominator\ =0: I.F.&= \frac{1}{xy}\ or\ \frac{1}{x^{2}}\ or\ \frac{1}{y^{2}}
\end{align*}
$$

### If M=F₁(xy)y and N=F₂(xy)x

$$
I.F.=\frac{1}{Mx-Ny}
$$

### If Mdx + Ndy can be put in the form $x^ay^b(mydx+nxdy)+x^cy^d(pydx+qxdy)=0$

$$
\begin{align*}
I.F.=x^hy^k\\
obtained\ by\\\
\frac{a+h+1}{m}=\frac{b+k+1}{n}\ and\ \frac{c+h+1}{p}=\frac{d+k+1}{q}
\end{align*}
$$