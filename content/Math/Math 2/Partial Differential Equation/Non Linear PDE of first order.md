---
title: Non Linear PDE of first order
weight: 3
---
$$
\begin{align*}
f(p,q)=0\\
\text{Assume } p=a\\
f(a,q)=0 \Rightarrow q=\phi(a)\\
\\
\delta z=\frac{\partial z}{\partial x}\delta x+\frac{\partial z}{\partial y}\delta y\\
\delta z =adx+\phi(a)dy\\
\text{integrating:}\\
z=ax+\phi(a)y+b
\end{align*}
$$

which is the **complete solution** since it takes the form $F(x,y,z,a,b)=0$ where a,b are arbitrary constants.

# Various forms and how to deal with them

## f(z,p,q)=0

Assume $q=ap$

$$
\begin{align*}
F(z,p,ap)=0\\
p=\phi(z)\\
\\
dz=pdx+qdy\\
dz=pdx+apdy\\
dz=\phi(z)(dx+ady)\\
dx+ady=\frac{dz}{\phi(z)}\\
\text{Integrating:}\\
x+ay=\int \frac{dz}{\phi(z)} +b
\end{align*}
$$

We obtain a complete solution.

Approach: One can solve it by considering a new function $u=x+ay$ to make $p=\frac{\partial z}{\partial u};q=a\frac{\partial z}{\partial u}$ and substituting it in f(z,p,q)=0.

## f(x,p)=g(y,q)=a

If we were able to separate x,p and y,q from each other
$$
\begin{align*}
f(x,p)=g(y,q)=a\\\\

f(x,p)=a\\
p=f_1(a,x)\\
\\
g(y,q)=a\\
q=g_1(a,y)\\
\\
dz=pdx+qdy\\
f_1(a,x)dx+g_1(a,y)dy\\
z=\int f_{1}(a,x)dx + \int g_{1}(a,y)dy + b
\end{align*}
$$

We obtain a complete solution.

## Clairaut's Form

Similar to [[Math/Math 2/Differential Equations/First order higher degree (nonlinear)|First order higher degree (nonlinear))#Clairaut's Equation]]

> z=px+qy+f(p,q) is Clairaut's form
> 
> Complete solution: z=ax+by+f(a,b)