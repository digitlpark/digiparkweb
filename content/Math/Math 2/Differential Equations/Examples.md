---
title: Examples
weight: 11
---
Q. Solve $(D^4-5D^2+8D-4)y=e^2y$

Auxilary equation $(m^4-5m^2+8m-4)=0$

$$
\begin{align*}
m=2,2,1\\
P.I.= \frac{1}{f(D)}(e^{2x}+e^{x})=\frac{1}{(D-2)^2(D-1)}(e^{2x}+e^{x})\\
\frac{1}{(D-2)^2(D-1)}e^{2x}+\frac{1}{(D-2)^2(D-1)}e^x\\
= e^{2x}\frac{1}{D^{2}}1+e^{x} \frac{1}{D} (1)\\
\\
e^{2x} \frac{x^{2}}{2}+ e^xx\\
\\
General\ solution:\\
c_{1}e^x+(c_2+c_3x)e^{2x}+e^{2x} \frac{x^{2}}{2}+ e^xx
\end{align*}
$$

We use [[Math/Math 2/Differential Equations/Particular solution of linear higher order ODE]]

# 2

$$
\begin{align*}
(D^2-4)y=sin(2x)\\
m^2-4=0\\
m=2,-2\\
\\
P.I. &= \frac{1}{F(-a^{2})}sin(2x)=\frac{-1}{8}\sin(2x)\\
\\
General\ solution:\\
c_{1}e^{2x}+c_{2}e^{-2x}+\frac{-1}{8}\sin(2x)
\end{align*}
$$

# 3

$$
\begin{align*}
(3D^{2}+2D-8)y=5 \cos x\\
\\
3x^{2}+2x-8=0\\
x=-2,\frac{4}{3}\\
\\
P.I. =5 \frac{1}{3D^{2}+2D-8} \cos x\\
5 \frac{1}{3(-1)+2D-8} \cos x\\
5 \frac{2D+11}{4D^{2}-121} \cos x\\
- \frac{1}{25}(2\sin x + 11 \cos x)\\
\\
General\ solution:\\
c_{1}e^{-2x}+c_{2}e^{\frac{4}{3}x}+ \frac{1}{25}(2\sin x - 11 \cos x)
\end{align*}
$$

# 4

$$
\begin{align*}
(D^{2}+a^{2})y=\sin ax\\
m^2+a^2=0\\
m=-a,-ai\\
\\
P.I. = \frac{1}{D^{2}+a^{2}}\sin ax\\
= IM(\frac{1}{D^{2}+a^{2}} e^{iax})\\
=e^{iax} \frac{1}{(D+ia)^{2}+a^{2}} e^{0}\\
=e^{iax} \frac{1}{D^2+2aiD} e^{0}\\
=e^{iax} \frac{1}{2ai}\frac{1}{D} e^{0}\\
=e^{iax} \frac{1}{2ai} x\\
Im\ part: \frac{-x}{2a} \cos ax\\
\\
General\ solution:\\
\frac{-x}{2a} \cos ax + c_{1}e^{-ax}+c_{2}e^{-aix}
\end{align*}
$$

# 5

$$
\begin{align*}
(D^4-2D^3+D^2)y=x^3\\
m^4-2m^3+m^2=0\\
m=0,0,1,1\\
y_{c}=c_1+c_{2}x+(c_3+c_{4}x)e^{x}\\
\\
P.I. y=\frac{1}{D^{2}(D^{2}-2D+1)}x^{3}\\
\frac{1}{D^{2}}(1-D)^{-2}x^{3}\\
\frac{1}{D^{2}}(1+2D+3D^2+4D^3+...)x^{3}\\
\frac{1}{D^{2}}(x^3+6x^2+18x+24+0..)\\
\frac{1}{D}(\frac{x^{4}}{4}+2x^{3}+9x^{2}+24x)\\
y_p=\frac{x^{5}}{20}+ \frac{x^{4}}{2} + 3x^{3}+ 12x^{2}\\
\\
General\ solution:\\
c_1+c_{2}x+(c_3+c_{4}x)e^{x}+\frac{x^{5}}{20}+ \frac{x^{4}}{2} + 3x^{3}+ 12x^{2}
\end{align*}
$$

# 6
Find particular integral of:
$$
\begin{align*}
(D^{2}-1)y=x^{2}\cos x\\
\frac{1}{D^{2}-1}x^{2}\cos x\\
=Re\{\frac{1}{D^{2}-1}x^{2}e^{ix}\}\\
e^{ix}\frac{1}{(D+i)^{2}-1}x^{2}\\
e^{ix} \frac{1}{D^{2}+2iD-2} x^{2}\\
e^{ix} \frac{1}{-2(1 - \frac{D^2+2iD}{2})} x^2\\
\frac{-1}{2}e^{ix} (1+ \frac{D^2+2iD}{2} + \frac{(D^2+2iD)^2}{4}) x^2\\
\frac{-1}{2}e^{ix}\left(1+\frac{D^{2}}{2}+iD-D^{2}\right)x^2\\
\frac{-1}{2}e^{ix}(x^{2}-1+2ix)
\end{align*}
$$
find real part of that later