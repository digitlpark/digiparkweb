---
title: Stochastic processes
weight: 3
---
# Brownian Motion

$$
\begin{align*}
u(x,t+\tau)dx=\int_{-\infty}^{\infty}u(x+\Delta,t)\phi(\Delta)d \Delta dx
\end{align*}
$$

# Langevin's model

$$
\begin{align*}
F_{f}=-6\pi \eta rv\\
\\
m \ddot x=F_{f}+F_{r} 
\end{align*}
$$

# RC circuit
In laplace domain, V(s) output voltage and W(s) input voltage
$$
\begin{align*}
V(s) &= \frac{1}{1+RCs}W(s)
\end{align*}
$$

# Dynamic model of car

$$
\begin{align*}
\frac{d^{2}x_{1}}{dt^{2}}=w_{1}(t)\\
\frac{d^{2}x_{2}}{dt^{2}}=w_{2}(t)
\end{align*}
$$
convert it to matrix form of first order system.

# Noisy Pendulum

$$
\begin{align*}
\ddot \theta &= -g \sin(\theta)+w(t)\\
w(t): \text{noise}
\end{align*}
$$

convert it to matrix form

# Spring 


$$
\begin{align*}
\ddot x+ \gamma \dot x + v^{2}x=w(t)\\

\end{align*}
$$

convert to matrix form

# White noise process

> [!Definition]
> w(t)$\in R^{s}$ is a random function with the properties
> - $w(t_{1}),w(t_{2})$ are independent
> - $E(w(t))=0$
> - $C_{w}(t,s)=E[w(t)w^{T}(s)]=\delta(t-s)Q$
> 