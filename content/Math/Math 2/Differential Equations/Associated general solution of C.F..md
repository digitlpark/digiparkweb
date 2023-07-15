---
title: Associated general solution of C.F.
weight: 7
---
[[Math/Math 2/Differential Equations/Linear Higher Order Differential Equations#Complementary Function of a Linear Higher Order ODE|Complementary functions are homogeneous]]

$$
\begin{align*}
(a_{0}D^{n}+a_{1}D^{n-1}+...+a_{n})y=0\ \ \ \ -&(1)\\
(D-m_{1})(D-m_{2})...(D-m_{n})=0\ \ \ \ -&(2)\\
\end{align*}
$$

Solutions of any one of $(D-m_k)y=0$ is also a solution of (2). Can be proven by swapping the terms, [[Differential Operator#^4c1615|because that changes nothing]]:

$$
\begin{align*}
(D-m_k)y=0\\
(D-m_1)(D-m_2)...(D-m_n)...\ \ *(D&-m_k)y*=0\\
(D-m_1)(D-m_2)...(D-m_n)...\ \ &*0*=0\\
0==0
\end{align*}
$$

Therefore, it's a solution of the original ODE as well.

## Trial solution

$$
\begin{align*}
(D-m_{k})y=0\\
\dd{y}{x}-m_{k}y=0\\
y=C_{k}e^{m_{k}x}
\end{align*}
$$

### Substituting into the main to check

$$
\begin{align*}
(a_{0}D^{n}+a_{1}D^{n-1}+...a_{n})y=0\\
(a_{0}D^{n}+a_{1}D^{n-1}+...a_{n})e^{m_{k}x}=0\\
(a_{0}m^{n}+a_{1}m^{n-1}+...+a_n)e^{m_{k}x}=0
\end{align*}
$$

Since the exponential term cannot get 0, the first term has to be=0. This term is called the **Auxilary Equation**

> Can be found by replacing D's by m's.
> Auxilary equation of f(D)y=0 is: f(m)=0

Number of Roots of this equation = n, and they give us the n m's where $y_k=e^{m_{k}x};k={1,2,...,n}$ satisfy the main ODE.

## CASE I: Distinct roots of m

If all m's are distinct:
$$
\begin{align*}\\
y_{1}=e^{m_{1}x},\\
y_{2}=e^{m_{2}x},\\
...\\
y_{n}=e^{m_{n}x}
\end{align*}
$$

are [[Linear Dependence of Functions|linearly independent]] and general solution of f(D)y=0 is:

$$
y_c(x)=c_{1}e^{m_{1}x}+c_{2}e^{m_{2}x}+c_{3}e^{m_{3}x}+...+c_{n}e^{m_{n}x}
$$

Utilizing [[Math/Math 2/Differential Equations/Linear Higher Order Differential Equations#Solution#Homogeneous]]

## CASE II: Equal roots of m

If for a 'k', mₖ is repeating i times, then it's contribution in the linear combination would be:

$$
(C_1+C_2x+...C_ix^{i-1})e^{m_{k}x}
$$

## If m is complex

$$
\begin{align*}
\text{two roots associated with }e^{m_{k}x}:\\
e^{x(a+bi)}e^{x(a-bi)}=e^{ax}(c_1\cos(bx)+c_2\sin(bx)) 
\end{align*}
$$

If they're repeating, $c_1,c_2$ will become $(c_1+c_2x+...),(c_3+c_4x+...)$