---
title: Mathematical Modelling
---
Consists of:
1. Translating real world problems into mathematical problems
2. Solving the mathematical problems
3. Interpreting the solutions in the language of the real world
# Newton's Law of cooling

According to Newton's law of cooling, the rate of change of temperature of a body is proportional to the difference between the tempreature of the body and the temperature of surrounding medium.

Proof:

Let 
* T=temperature of the body
* $T_s$: temperature of surrounding medium

T(t): temperature of the body at any time 't'
T(t+δt): temperature at any time t+δt

$$
\begin{align*}
\dd{T}{t}\propto(T-T_s)\\
So, T(t+Δt)-T(t) \propto (T-T_{s})\Delta t+O(\Delta t)\\
\lim_{\Delta t\rightarrow0}(\frac{T(t+\Delta t)-T(t)}{\Delta t})\propto (T-T_{s})\\
\dd{T}{t}=k(T-T_{s})\\
\int \frac{dT}{T-T_{s}}=\int kdt\\
log(T-T_{s})=kt+C\\
T-T_{s}=Ae^{kt}\\
\\
T=T_{s}+Ae^{kt}
\end{align*}
$$

## Particular solution

Say the temperature initially is $T_0$, then T(0)=$T_0$

$$
T(t)=T_{s}+(T_{0}-T_{s})e^{kt}
$$

k is negative

## Inference

Excess of temperature of the body over that of the surrounding medium decays exponentially. According to Newton's law of cooling, the rate at which a substance cools in moving air is proportional to the difference between the temperature of the substance and that of air

GRAPH: [Newton's law of cooling](https://www.desmos.com/calculator/u1xmtmahwn)

# Single Compartment Model

Let a vessel contain a volume V of a solution with concentration c(t) of a substance at time t. Let a solution with constant concentration $C_{1}'$ in an overhead tank enter the vessel at a constant rate R and after mixing thoroughly with the solution in the vessel, let the mixture with concentration c(t) leave the vessel at the same rate R, so that the volume of the solution in the vessel remains V.

Using the principle of continuity

$$
\begin{align*}
Vc(t+\Delta t)-Vc(t)=RC_{1}'\Delta t-Rc(t)\Delta t + O(\Delta t)\\
V\left[\frac{c(t+\Delta t)-c(t)}{\Delta t}\right]=\frac{R}{V}C_{1}' - \frac{R}{V}c(t)\\
\dd{c}{t}+ \frac{R}{V}c(t)=\frac{R}{V}C_{1}'
\end{align*}
$$

## Solution

$$
c(t)=C_{1}'+(C_{0}-C_{1}')e^{-\frac{R}{V}t}
$$

# Electrical Networks

[RLC Circuit Differential Equation | Lecture 25 | Differential Equations for Engineers - YouTube](https://youtu.be/RF9EyZCGGx0)

[Circuits I: RLC Circuit Response - YouTube](https://youtu.be/61t8Z6ba1vM)

> General Equation for Series (Using KVL and differentiating):
> $$Li''+Ri'+ \frac{1}{c}i=E'(t)$$

> General Equation for Parallel (Using KCL and differentiating):
> $$Cv''+ \frac{1}{R}v'+ \frac{v}{L}=0$$

> where:
> * E(t): Electromotive force
> * I(t): Current in the circuit at time 't'
> * v(t): Voltage at time 't'
> * L: Inductance
> * C: Condactance
> * R: Resistance

## Getting the Terms

### L: Inductance term

Voltage drop across inductor

$$
E_L=L\dd{I}{t}
$$

In terms of current:

$$
I_{L}=\frac{1}{L}\int_{0}^{t} v dt+I_{0}
$$

### C: Conductance term

Voltage drop across capacitor

$$
\begin{align*}
E_{c}=\frac{1}{C}Q\\
\\
Also,\\
E_{c}=\frac{1}{C}\int_{t_{0}}^tIdt
\end{align*}
$$

In terms of current:

$$
I_{C}=C \dd{v}{t}
$$

### R: Resistance term

Voltage drop across resistor

$$
E_R=RI
$$

In terms of current:

$$
I_{R}=\frac{v}{R}
$$

## LC Circuit

### Without Voltage

### With Voltage

## LCR Circuit

### Without Voltage

### With Voltage

# Bending of Beams

[Deflection of Beam Model || Modeling With Differential Equation|| - YouTube](https://youtu.be/eYV8_15yh8s)

[Understanding the Deflection of Beams - YouTube](https://youtu.be/MvBqCeZllpQ)

We use the concept of [[Math/Math1/Curvature|Curvature]] over here.

By theory of elasticity the **bending moment M(x)** is proportional to the curvature of the deflection curve.

$$
M(x)\propto k
$$

Curvature=k=$f''/(1+f'^{2})^{\frac{3}{2}}$
If we take f'~0, then
$$
\begin{align*}
k=f''\\
M(x)=EI f''\\
\\
w(x)=M''\\
w(x)=\dd{}{x^2}(EIf'')\\
=EIf''''
\end{align*}
$$
EI: constant of proportionality, called 'flexural rigidity'
* E: Young's modulus: stress/strain
* I: mr^2

w(x)= load per unit length

## Boundary conditions

*  Embedded at both ends: y,y' = 0 at x=0,L
* Embedded at x=0 and free x=L: 0=y(0),y'(0)=y''(L)=y'''(L)
* Freely supported/Pin joined ends: y,y''=0 at x=0,L

# Spread of Epidemic

[Mathematical Modeling of Epidemics. Lecture 1: basic SI/SIS/SIR models explained. - YouTube](https://youtu.be/IXkr0AsEh1w)

S: Susceptible
I: Infected
R: Removed
N: Total population

* s(t)=S/N
* i(t)=I/N
* r(t)=R/N
* s(t)+i(t)+r(t)=1

## SI Model (Susceptible-Infected)


β: transmission/infection rate
$$
\begin{align*}
I(t+\delta t)=I(t)+\beta \frac{S(t)}{N} I(t)\delta t\\
\\
s(t)+i(t)=1\\
\dd{i(t)}{t}=\beta si\\
\dd{i}{t}=\beta (1-i)i\\
\\
\end{align*}
$$

### Solution (Logistic Growth)

$$
i(t)=\frac{i_{0}}{i_{0}+(1-i_{0})e^{-\beta t}}
$$

## SIS Model (Susceptible-Infected-susceptible)

γ: recovery rate

$$
\begin{align*}
\dd{i}{t}=\beta si- \gamma i\\
\dd{i}{t}=(\beta - \beta i - \gamma)i
\end{align*}
$$

### Solution

$$
\begin{align*}
i(t)=\left(1-\frac{\gamma}{\beta}\right) \frac{C}{C+e^{-(\beta-\gamma)t}}\\
C=\frac{\beta i_{0}}{\beta -\gamma-\beta i_{0}}
\end{align*}
$$
or
$$
\begin{align*}
a=1- \frac{\gamma}{\beta}\\
i(t)=\frac{ai_{0}}{i_{0}+(a-i_{0})e^{-a\beta t}}
\end{align*}
$$
Limit as t→∞
* β<γ: i=0
* β>γ: i=(1-γ/β)

## SIR Model (Susceptible-Infected-Removed)

$$
\begin{align*}
s(t)+i(t)+r(t)=1\\
\dd{i}{t}=\beta si- \gamma i\\
\dd{s}{t}=-\beta si\\
\dd{r}{t}=\gamma i
\end{align*}
$$
* s(0)=1-i₀
* i(0)=i₀
* r(0)=0

We find a relation:

c=$\beta/\gamma$ is the contact number and is defined as the number of close contacts per infected individual

$$
\begin{align*}
\dd{i}{s}=\frac{\dd{i}{t}}{\dd{s}{t}}\\
=\frac{\beta si-\gamma i}{-\beta si}\\
-1+ \frac{1}{cs}\\
Integrating\\
i=-s+ \frac{1}{c}\log s +Q\\
i+s- \frac{1}{c}\log s=Q 
\end{align*}
$$
is independent of time

### Inference

After solving for c, contact number in terms of $s_0,s_\infty$, we see that if 'c' is small enough, then there will be no epidemic.