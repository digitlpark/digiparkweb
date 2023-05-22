---
title: Gamma and Beta Functions
---
# Gamma Function

$$
\begin{align}
\Gamma(n)=\int\limits_{0}^{\infty}e^{-x}x^{n-1}dx=(n-1)!\\
\Gamma(n)=k^n\int\limits_{0}^{\infty}e^{-kx}x^{n-1}dx
\end{align}
$$

## Properties

* $\Gamma (\frac{1}{2}) = \sqrt{\pi}$
	* [[Math/Math1/Gaussian Integral (half factorial)|This]] and $\Gamma(n)=2\int_0^\infty e^{-x^2}x^{2n-1}dx$ can be used to prove
* $n\Gamma (n)=\Gamma (n+1)=n!$

# Beta Function

$$
\begin{align}
\beta(m,n)=\int_0^1 x^{m-1}(1-x)^{n-1}dx
\end{align}
$$

## Properties

* B(m,n)=B(n,m)
	* Symmetrical because of the way it's defined and 
		($\int _a^bf(x)dx = \int_a^bf(a+b-x)dx$)
* B(m,n) = $2 \cdot \int_0^{\frac{\pi}{2}}\sin^{2m-1}(x) \cos^{2m-1}(x)dx$
	* Useful to evaluate the integral of product of power of sin and cos.
	* Can be proved by substituting x=$\sin^2\theta$  in the main definition.
* B(m,n) = $\int_0^\infty \frac{x^{m-1}}{(1+x)^{m+n}}dx$
	* Can be proved using substituting x=$\frac{t}{1+t}$ in $\int_0^1 x^{m-1}(1-x)^{n-1}dx$
* B(m,n)=$\int_0^1 \frac{x^{m-1}+x^{n-1}}{(1+x)^{m+n}}dx$
	* From previous property, B(m,n)=$\int_0^\infty \frac{x^{m-1}}{(1+x)^{m+n}}dx$ = $\int_0^1 \frac{x^{m-1}}{(1+x)^{m+n}}dx + \int_1^\infty \frac{x^{m-1}}{(1+x)^{m+n}}dx$
	* We can prove the second integral, $\int_1^\infty \frac{x^{m-1}}{(1+x)^{m+n}}dx = \int_0^1 \frac{x^{n-1}}{(1+x)^{m+n}}dx$ by using x=1/t.

# Relation between Beta and Gamma functions

$B(m,n)=\frac{\Gamma (m) \Gamma (n)}{\Gamma (m+n)}$

Proof

We'll be using $B(m,n)=\int_0^\infty \frac{x^{m-1}}{(1+x)^{m+n}}dx$ and $\Gamma(n)=k^n\int\limits_{0}^{\infty}e^{-kx}x^{n-1}dx$
$$
\begin{align}
\Gamma(m)=\int\limits_{0}^{\infty}z^me^{-zx}x^{m-1}dx\\
\times e^{-z}z^{n-1}dz\\
=\int_0^\infty\Gamma(m)e^{-z}z^{n-1}dz=\int_0^\infty\int\limits_{0}^{\infty}z^me^{-zx}x^{m-1}e^{-z}z^{n-1}dzdx\\
\Gamma(m)\Gamma(n)=\int_0^\infty x^{m-1} \left(\int\limits_{0}^{\infty}e^{-z(x+1)}z^{m+n-1}dz\right)dx\\
\Gamma(m)\Gamma(n)=\int_0^\infty x^{m-1}\left(\frac{\Gamma (m+n)}{(x+1)^{m+n}}\right)dx\\
=\Gamma(m+n)\beta(m,n)\\
\\
\therefore \beta(m,n)=\frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}
\end{align}
$$

Could also be done like https://youtu.be/E9sc1FnJF9k?t=191

## Some more properties that can be proved using this relation

* $n\beta(m+1,n)=m\beta(m,n+1)$
* $\beta(m,n)=\beta(m,n+1)+\beta(m+1,n)$

## More properties

* $\Gamma(n)\Gamma(1-n)=\frac{\pi}{\sin(n\pi)}$ (proof is out of the scope for now https://youtu.be/XgnPg0Ab6hE)
* $\Gamma(n)\Gamma(n+0.5)=\frac{\sqrt{\pi} \cdot \Gamma(2n)}{2^{2n-1}}$