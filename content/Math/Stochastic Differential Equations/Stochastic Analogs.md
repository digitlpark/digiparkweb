---
title: Stochastic Analogs
weight: 2
---
# Stochastic models

Since the differential equation involves randomness, we can only say something about the probability distributions of the solutions

## simple population growth model

$$
\begin{align*}
\frac{dN}{dt}=a(t)N(t)\\
N(0)=N_{0}\\
a(t)=r(t)+\text{noise}
\end{align*}
$$

## Electrical circuit

$$
\begin{align*}
LQ''+RQ' + \frac{1}{C}Q(t)=F(t)\\
F(t)=G(t)+ \text{noise}
\end{align*}
$$

# Filter

Kalman-Bucy filter gives a procedure for estimating the state of a system which satisfies a noisy linear differential equation, based on a series of noisy observations

Like observing Q(s) until a time $s\le t$, call it $Z(s)$ and finding the best estimation for Q(t)


# Optimal stopping problem

$X_{t}$: price of asset

$$
\frac{dX_{t}}{dt}=rX_{t}+\alpha X_{t}*\text{noise}
$$

If we know the value of $X_{s}$ until present time t, then what is the stopping strategy to maximize expected profit when inflation is taken into account

# Stochastic Control

## Risky investment

$$
\frac{dp_{1}}{dt}=(a+\alpha*\text{noise})p_{1}
$$

## safe investment

$$
\frac{dp_{2}}{dt}=bp_{2}
$$

## portfolio

portfolio $u_{t}\in[0,1]$ such that a person places $u_{t}X_{t}$ in risky investment and $(1-u_{t})X_{t}$ in safe investment

Find the investment $u_{t}0<t<T;$ which maximizes expected utility $$\max_{u_{t}}(E(U(X_{T}^{u})))$$

# Mathematical Finance

At t=0, the person is offered the right to buy 1 unit from risky asset at a price K. How much should he be willing to pay?

Solved by Fischer Black and Myron Scholes