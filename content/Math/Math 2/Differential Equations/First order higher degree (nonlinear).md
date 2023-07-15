---
title: First order higher degree (nonlinear)
weight: 5
---
# General form

$$
\begin{align*}
f(x,y,y')=0\\
or\\
f(x,y,p)=0;\ p=y'\\
\\
p^n+a_1p^{n-1}+a_2p^{n-2}+...+a_{n-1}p+a_{n}=0;\\
a_k(x,y)
\end{align*}
$$

# Methods

## Method 1: Equations solvable for p

$$
\begin{align*}
p^n+a_1p^{n-1}+a_2p^{n-2}+...+a_{n-1}p+a_n=0\\
(p-f_1(x,y))(p-f_2(x,y))...(p-f_n(x,y))=0\\\\

Solving\ n\ equations:\ y'-f_k(x,y)=0: F_k(x,y,c)=0\\
Final\ solution:\ F_1(x,y,c)F_2(x,y,c)...F_n(x,y,c)=0
\end{align*}
$$

## Method 2: Equations solvable for x 

$$
\begin{align*}
Solving\ f(x,y,p)=0\ for\ x, x=F(y,p)\\
\dd{x}{y}=\pd{F}{y}+\pd{F}{p}\dd{p}{y}\\
0=ϕ_1(y,p,\dd{p}{y})ϕ_2(y,p); first\ order,degree\\
\text{we ignore }ϕ_2\\
\text{Sub solution: } \Phi(y,p,c)=0\\
\text{Final solution: Eliminating p from } x=F(y,p),\Phi 
\end{align*}
$$

## Method 3: Equations solvable for y

Same as [[#Method 2: Equations solvable for x]]

---

## Clairaut's Equation

### Form

$$
y=xp+\psi (p)
$$

### Solution

$$
\begin{align*}
\dd{y}{x}= p+&x\dd{p}{x}+\psi'(p)\dd{p}{x}\\
0= &x\dd{p}{x}+\psi'(p)\dd{p}{x}\\
(x+\psi'(p))\dd{p}{x}=0 
\end{align*}
$$

#### General Sol

$$
\begin{align*}
\dd{p}{x}=0\\
Subbing\ p=c\ in\ main\\
y=xc+\psi (c)
\end{align*}
$$

#### Singular solution

$$
\begin{align*}
Eliminating\ p\ from:\\
(x+\psi '(x))=0\\
y=xp+\psi (p)
\end{align*}
$$

## Lagrange's Equation

### Form

$$
y=x\phi (p)+\Phi (p)
$$