---
title: Lagrange's Multipliers
---
Given constraint: Φ(x,y,z)=0
Trying to maximize: P(x,y,z)

F(x,y,z)=P(x,y,z)+λΦ(x,y,z)
$$
\begin{align}
\frac{\partial F}{\partial x}=0\\
\frac{\partial F}{\partial y}=0\\
\frac{\partial F}{\partial z}=0\\
\frac{\partial F}{\partial \lambda}=0\text{ we get back our constraint}\\
\end{align}
$$
By solving these four equations we get (x₀,y₀,z₀) with λ₀ and our extremum: P(x₀,y₀,z₀)

# How it works

* Let R(x,y) be the function that we want to maximize (revenue)
* Let B(x,y)=b be the constraint (budget)


We can visually and conceptually understand that at an extremum the gradient of **R** is a scalar version of the gradient of **B** ^[Since they both, B(x,y)=b and R(x,y)=M\*, will tangentially touch each other at the extremum]

$$
\begin{align}
\nabla R = \lambda \nabla B \Rightarrow\\
\frac{\partial R}{\partial x}=\lambda \frac{\partial B}{\partial x}\\
\frac{\partial R}{\partial y}=\lambda \frac{\partial B}{\partial y}
\end{align}
$$

We can pack these two equations + the constraint equation together using the Lagrangian $L(x,y,\lambda )=R(x,y)-\lambda (B(x,y)-b)$ and then solving for $\nabla L = 0$

$$
\begin{align}
\frac{\partial L(x,y)}{\partial x}=\frac{\partial R}{\partial x}-\lambda \frac{\partial B}{\partial x}=0\\
\frac{\partial L(x,y)}{\partial y}=\frac{\partial R}{\partial y}-\lambda \frac{\partial B}{\partial y}=0\\
\frac{\partial L(x,y)}{\partial \lambda}=-(B(x,y)-b)=0
\end{align}
$$
We get back our equations!

> This helps convert a constrained optimization problem → Unconstrained optimization problem (in a higher D)

## Use of the λ
Let (h\*,s\*,λ\*) be the solution of ∇L=0 and maximum revenue $M^*=R(h^*,s^*)$

Now making everything, a function of b:
$$
\begin{align}
M^\*(b)=R(h^*(b),s^\*(b))\\
L^\*(b)=L(h^\*(b),s^\*(b),\lambda ^\*(b),b)\\
= R(h^\*(b),s^\*(b))-\lambda ^\*(B(h^\*(b),s^\*(b))-b)\\
= R(h^\*(b),s^\*(b)) = M^\*(b)\\
\\
\frac{dL^\*}{db}=\frac{\partial L}{\partial h^\*}\frac{\partial h^\*}{\partial b}+\frac{\partial L}{\partial s^\*}\frac{\partial s^\*}{\partial b}+\frac{\partial L}{\partial \lambda^\*}\frac{\partial \lambda^\*}{\partial b}+\frac{\partial L}{\partial b}\frac{\partial b}{\partial b}\text{ because (12)}\\
\frac{\partial L}{\partial h^\*,s^\*,\lambda^\*}=0\text{ because nabla L=0 at that point}\\
\frac{dL^\*}{db}=\frac{\partial L}{\partial b}\\
\Leftrightarrow \frac{dM^\*}{db}=-(-\lambda)=\lambda
\end{align}
$$
∴ The maximum revenue as a function of the budget changes with respect to it equal to the scalar difference between the revenue and budget at that maxima (λ\*(b))

---
# Sources
https://youtu.be/yuqB-d5MjZA