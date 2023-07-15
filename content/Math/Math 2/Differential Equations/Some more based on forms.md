---
title: Some more based on forms
weight: 9
---
# Method of Variation of Parameters

$$
\begin{align*}
a_{0}(x)y''(x)+a_{1}(x)y'(x)+a_{2}(x)y(x)=r(x)\\
\\
y_c(x)=A_{1}y_{1}(x)+A_{2}y_{2}(x)\\
y_p(x)=A_{1}(x)y_{1}(x)+A_{2}(x)y_2(x)\\
\\
A_1(x)=-\int\left(\frac{y_{2}(x)g(x)}{W(x)}\right)dx \ and\ \\
B(x)=\int \left(\frac{y_{1}(x)g(x)}{W(x)}\right)dx\\
g(x)=\frac{r(x)}{a_{0}}
\end{align*}
$$

W is the [[Linear Dependence of Functions#Wronskian]]

# Cauchy Euler equation
Notes are by Sir, but can also refer to:
[https://www.math.utah.edu/\~gustafso/s2014/3150/slides/cauchy-euler-de.pdf](https://www.math.utah.edu/~gustafso/s2014/3150/slides/cauchy-euler-de.pdf)

## Form
$$
(a_{0}x^{n}D^{n}+a_{1}x^{n-1}D^{n-1} +...+a_{n-1}xD + a_{n})y = r(x)\\
$$

## Simplify and Solve

We can convert the differential equation with variable coefficients to a differential equation with constant coefficients by doing a substitution $x=e^{t}$

$$
\begin{align*}
Let\\
D = \frac{d}{dx}\\
\theta = \frac{d}{dt}
\end{align*}
$$

### Relation between operators
First
$$
\begin{align*}\\
x=e^{t};t=\ln x\\
\dd{y}{x}=\dd{y}{t} \dd{t}{x}\\
x D y = \theta y\\
x D = \theta
\end{align*}
$$

Second
$$
\begin{align*}
\dd{^{2}}{x^{2}}y=\dd{}{x} (\dd{y}{x})\\
=\dd{}{x}(\frac{1}{x} \dd{y}{t})\\
\frac{-1}{x^{2}} \dd{y}{t} + \frac{1}{x} \dd{}{x} (\dd{y}{t})\\
\frac{-1}{x^{2}} \dd{y}{t} + \frac{1}{x} \dd{}{t}(\dd{y}{t}) \dd{t}{x}\\
\frac{-1}{x^{2}} \dd{y}{t} + \frac{1}{x} \dd{^{2}}{t^{2}} \frac{1}{x}\\
\\
x^{2}D^{2}y=(\theta ^{2}- \theta)y\\
x^{2}D^{2} = \theta(\theta -1)
\end{align*}
$$

Generalized
$$
x^{n}D^{n} = \theta(\theta -1)...(\theta-n+1)
$$

Just substitute these in the original to get constant coefficients.

# Legendre's Linear Equation

Similar to [[#Cauchy Euler equation]]

## Form
$$
(a_{0}(ax+b)^{n}D^{n}+a_{1}(ax+b)^{n-1}D^{n-1} +...+a_{n-1}(ax+b)D + a_{n})y = r(x)\\
$$

## Simplify and Solve

Here too, we can convert the differential equation with variable coefficients to a differential equation with constant coefficients by doing a substitution $ax+b=e^{t}$

### Relation between operators

$$
(ax+b)^{n}D^{n}=a^{n}\theta (\theta -1)...(\theta - n +1)
$$

Just substitute these in the original to get constant coefficients.