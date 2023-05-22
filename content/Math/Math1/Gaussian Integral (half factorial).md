---
title: Gaussian Integral (half factorial)
---
Integration done by converting the integration wrt cartesian coordinates → polar coordinates.

$$
\begin{align}
I=\int \limits_0^\infty e^{-x^2}dx = (\frac{1}{2})!=\frac{\sqrt{\pi}}{2}
\\
Proof:
\\
I^2 = \int \limits_0^\infty e^{-x^2}dx \cdot \int \limits_0^\infty e^{-y^2}dy\\
=\iint \limits_0^\infty e^{-(x^2+y^2)}dxdy\\
=\int \limits_{r=0}^{r=\infty} \int \limits_{\theta=0}^{\theta=\frac{\pi}{2}} e^{-r^2}rd\theta dr\\
=\frac{\pi}{2}\cdot-\frac{1}{2} \int \limits_{r=0}^{r=\infty}e^{(-r^2)}(-2rdr)\\
=\frac{\pi}{2}\cdot-\frac{1}{2} [e^{-r^2}]_0^\infty=\frac{\pi}{4}\\
\\
I=\frac{\sqrt{\pi}}{2}
\end{align}
$$