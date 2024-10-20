---
title: Basics
weight: 1
---
# Homogeneous LTI DE

> homogeneous linear time-invariant differential equations

$$
\begin{align*}
\frac{dx}{dt}&= F x\\
\text{By separation of variables}\\
x(t)&= e^{Ft}x(0)\\
\\
x(t)&= x(0)+\int^{t} F x(\tau)d \tau\\
x(t)&= x(0)+\int^{t} F\left[x(0)+\int^{t} F x(\tau)d \tau\right]d \tau\\
&= x(0)+Fx(0)t+\iint F^{2}x(\tau)d \tau^{2}\\
&= x(0)(1+Ft+ \frac{F^{2}t^{2}}{2!}+ \frac{F^{3}t^{3}}{3!}+..)\\
&= x(0)e^{Ft}
\end{align*}
$$

This would work even if F is a matrix!

# Inhomogeneous LTI DE

$$
\begin{align*}
\frac{dx}{dt}=Fx(t)+L w(t)\\
\text{Integrating factor: }e^{-Ft}\\
e^{-Ft} \frac{dx}{dt}- e^{-Ft}Fx=e^{-Ft}Lw(t)\\
\frac{d}{dx}(e^{-Ft}x)=e^{-Ft}Lw(t)\\
e^{-Ft}x-e^{-Ft_{0}}x(t_{0})=\int_{t_{0}}^{t}e^{-F \tau}Lw(\tau)d \tau\\
x(t)=e^{Ft-Ft_{0}}x(t_{0})+\int_{t_{0}}^{t}e^{Ft-F \tau}Lw(\tau)d \tau 
\end{align*}
$$

# Time variant General DE

## homogeneous

$$
\begin{align*}
\frac{dx}{dt}=F(t)x(t)\\
\\
\text{Assume solution }x(t)=\psi(t,t_{0})x(t_{0})
\end{align*}
$$

## inhomogeneous

$\psi(t_{0},t)$ is the integrating factor in this case

$$
\begin{align*}
\frac{dx}{dt}=F(t)x(t)+L(t)w(t)\\
x(t)=\psi(t,t_{0})x(t_{0})+\int_{t_{0}}^{t}\psi(t,\tau)Lw(\tau)d \tau 
\end{align*}
$$

# Picard Lindelof theorem

## Generic Equation

$$
\frac{dx}{dt}=f(x(t),t);x(t_{0})=x_{0}
$$

## Picard Iteration

Similar to [[ODE Methods#Picard's Method]]

$$
\begin{align*}
\phi_{n+1}(x)=x_{0}+\int_{t_{0}}^{t}f(\phi_{n}(\tau),\tau)d \tau\\
\\
\lim_{n\rightarrow \infty}(\phi_{n}(t))=x(t)
\end{align*}
$$

provided that it's continuous in both arguments and [[Lipschitz condition|lipschitz continuous]] in first argument.

## The theorem

Under the above continuity conditions the differential equation has a solution and it is unique at a certain interval around $t_{0}$