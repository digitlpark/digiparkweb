---
title: Euler's Theorem
---
# The theorem
If u is a homogeneous function of degree 'n' in x,y: u(x,y)=$x^nf(y/x)$  (OR) u(tx,ty)=tⁿu(x,y)
$$ x\frac{\partial u(x,y)}{\partial x}+y\frac{\partial u(x,y)}{\partial y}=n\cdot u(x,y) $$
## Proof

$$
\begin{align}
u=x^nf\left(\frac{y}{x}\right) \\
\frac{\partial u}{\partial x}= nx^{n-1}f\left(\frac{y}{x}\right) + x^nf'\left(\frac{y}{x}\right)\frac{y}{-x^2}\\
\frac{\partial u}{\partial y} = x^{n-1}f'\left(\frac{y}{x}\right)\\
\\
x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}=n\left(x^nf\left(\frac{y}{x}\right)\right) = nu\\
=g(u)
\end{align}
$$
# Modified Euler's Theorem
If u = Φ(v(x,y)) where v(x,y) is a homogeneous function of x,y of degree n:
$$
x\left(\frac{\partial u}{\partial x}\right)+y\left(\frac{\partial u}{\partial y}\right)=n\cdot \frac{\Phi^{-1}(u)}{\frac{\partial \Phi^{-1}(u)}{\partial u}}
$$
## Proof
$$
\begin{align}
x\frac{\partial v}{\partial x}+y\frac{\partial v}{\partial y} = nv\\
\Phi^{-1}(u)=v(x,y)\\
\frac{\partial v}{\partial x}=\left(\frac{\partial \Phi^{-1}(u)}{\partial u}\right)\left(\frac{\partial u}{\partial x}\right),\\ 
\frac{\partial v}{\partial y}=\left(\frac{\partial \Phi^{-1}(u)}{\partial u}\right)\left(\frac{\partial u}{\partial y}\right)\\
\\
\text{Substituting these in (7)}\\
x\left(\frac{\partial \Phi^{-1}(u)}{\partial u}\right)\left(\frac{\partial u}{\partial x}\right)+y\left(\frac{\partial \Phi^{-1}(u)}{\partial u}\right)\left(\frac{\partial u}{\partial y}\right) = nv = n\Phi^{-1}(u)\\
x\left(\frac{\partial u}{\partial x}\right)+y\left(\frac{\partial u}{\partial y}\right)=n\cdot \frac{\Phi^{-1}(u)}{\frac{\partial \Phi^{-1}(u)}{\partial u}}\\
=g(u)
\end{align}
$$


# Euler's deduction II
$$
x^2\frac{\partial^2u}{\partial x^2}+2xy\frac{\partial^2u}{\partial x \partial y}+y^2\frac{\partial^2u}{\partial y^2} = g(u)[\frac{\partial g(u)}{\partial u}-1]=g(u)[g'(u)-1]
$$
For u being homogenous the RHS of this expression would be $nu(n-1)$
