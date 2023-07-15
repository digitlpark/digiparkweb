---
title: PDE
weight: 1
---
z is a function of x,y

$$
\begin{align*}
p=\frac{\partial z}{\partial x}\\
q=\frac{\partial z}{\partial y}\\
r=\frac{\partial^2 z}{\partial x^2}\\
s=\frac{\partial^2 z}{\partial x\partial y}\\
t=\frac{\partial^2 z}{\partial y^2}
\end{align*}
$$

f(x,y,z,p,q,r,s,t)=0 is a Partial differential equation

> Order: It is the order of the highest partial derivative appearing in differential equation.

# Formation of PDE

## arbitrary constants
f(x,y,z,a,b)=0
We form a PDE by eliminating the arbitrary constants a,b.

## arbitrary function
We take the derivative of a relation to obtain a PDE

F(u,v)=0; u(x,y,z), v(x,y,z)

taking derivative wrt x,y:

$$
\begin{align*}
F_u(u_x+u_zz_x)+F_v(v_x+v_zz_x)=0\\
F_u(u_y+u_zz_y)+F_v(v_y+v_zz_y)=0\\
\begin{vmatrix}u_x+u_zz_x & v_x+v_zz_x\\
u_y+y_zz_y & v_y+v_zz_y\end{vmatrix}=0\\
\\
\text{We get the form: }Pp+Qq=R\\
P=\frac{\partial (u,v)}{\partial (y,z)}\\
Q=\frac{\partial (u,v)}{\partial (z,x)}\\
R=\frac{\partial (u,v)}{\partial (x,y)}
\end{align*}
$$

# Classification of a PDE

1. Linear
	1. P(x,y)p+Q(x,y)q=R(x,y)z+S(x,y)
2. Semi-linear
	1. P(x,y)p+Q(x,y)q=R(x,y,z)
3. Quasi-linear
	1. P(x,y,z)p+Q(x,y,z)q=R(x,y,z) (called **Lagrange's linear equation**)
4. Non-linear: none of the above

# Solutions of a PDE

* Complete solution
	* Function of the form F(x,y,z,a,b)=0 where a,b are arbitrary constants
* General solution
	* Function of the form F(u,v)=0 where F is an arbitrary function of u,v satisfying PDE is called general solution.