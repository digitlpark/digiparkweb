---
title: Frobenius Method
weight: 12
---
This method is a series solution about a regular singular point.

Neat site: [7.3: Singular Points and the Method of Frobenius - Mathematics LibreTexts](https://math.libretexts.org/Bookshelves/Differential_Equations/Differential_Equations_for_Engineers_(Lebl)/7%3A_Power_series_methods/7.3%3A_Singular_Points_and_the_Method_of_Frobenius)

> [!Theorem]
> Let x₀ be a *regular singular point* of 
> $$a_0(x)y''+a_1(x)y'++a_2(x)y=0$$
> 
> Solution is in the form
> $$y(x)=(x-x_{0})^{r}\sum\limits _{n=0}^{\infty} a_{n}(x-x_{0})^{n}$$

# Process to find the y

## 1. Substitute y,y',y'' in the differential equation

$$
\begin{align*}
y(x)=\sum\limits _{n=0}^{\infty}a_{n}(x-x_{0})^{n+r}\\
\\
y'(x)=\sum\limits _{n=0}^{\infty}(n+r)a_{n}(x-x_{0})^{n+r-1}\\
\\
y''(x)=\sum\limits _{n=0}^{\infty}(n+r)(n+r-1)a_{n}(x-x_{0})^{n+r-2}
\end{align*}
$$

## 2. Equating the coefficient of the lowest power to 0

We obtain a quadratic equation in 'r' known as an **indicial equation**. 
This quadratic equation has two roots $r_{1},r_{2}$ known as **indicial roots**

> This is to make $a_{0}\ne0$

## 3. Equating the coeffs of remaining powers of (x-x_0) to 0

We obtain a recurrence relation relating the coefficients $a_n$

Substitution of the indicial roots gives the values of $a_n$

## 4. General solution

$$
y=A_1y_1(x)+A_2y_2(x)
$$

$y_1,y_2$ are [[Linear Dependence of Functions|linearly independent]]

By the above three steps we obtain y₁, but to obtain y₂ we have cases based on indicial roots.

# Cases based on indicial roots

Generally $r_1>r_2$

## If they are distinct and do not differ by an integer

$$
\begin{align*}
y_1=(x-x_{0})^{r_{1}}\sum\limits _{n=0}^{\infty} a_{n}(x-x_{0})^{n}\\
\\
y_2=(x-x_{0})^{r_{2}}\sum\limits _{n=0}^{\infty} b_{n}(x-x_{0})^{n}
\end{align*}
$$

## If they have a double root

$r_1=r_2=r$

$$
\begin{align*}
y_1=(x-x_{0})^{r}\sum\limits _{n=0}^{\infty} a_{n}(x-x_{0})^{n}\\
\\
y_2=(x-x_{0})^{r+1}\sum\limits _{n=0}^{\infty} b_{n}(x-x_{0})^{n}+(\ln (x-x_0))y_{1}
\end{align*}
$$

## If they are distinct and differ by an integer
Take $r_1$ to be the smaller root because it is sometimes possible to obtain the general solution using the smaller root alone.
$$
\begin{align*}
y_1=(x-x_{0})^{r_1}\sum\limits _{n=0}^{\infty} a_{n}(x-x_{0})^{n}\\
\\
y_2=(x-x_{0})^{r_2}\sum\limits _{n=0}^{\infty} b_{n}(x-x_{0})^{n}+C(\ln (x-x_0))y_{1}
\end{align*}
$$

> C may be 0 sometimes

### Can also be found by

$$
y_2(x)=\dd{y}{r} | _{r=r_1}
$$

## If they are complex

$$
\begin{align*}
y=(x-x_{0})^{r}\sum\limits _{n=0}^{\infty} a_{n}(x-x_{0})^{n}\\\\
\end{align*}
$$

$y_1,y_2$ can be found by taking the real and imaginary parts of y