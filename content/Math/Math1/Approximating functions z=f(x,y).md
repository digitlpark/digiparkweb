---
title: Approximating functions z=f(x,y)
---
Similar to [[Math/Math1/Approximating functions]] but here it's a multivariable version
# Taylor Series
* About (x,y)=(a,b)
	* $$
	\begin{align}
	f(x,y)=f(a,b)+((x-a)\frac{\partial}{\partial x}+(y-b)\frac{\partial }{\partial y})^1f(x,y)+\frac{1}{2!}\cdot ((x-a)\frac{\partial}{\partial x}+(y-b)\frac{\partial }{\partial y})^2f(x,y)+.\\
	f(x,y)=f(a,b)+[(x-a)f_x+(y-b)f_y]+\frac{1}{2!}\cdot[(x-a)^2f_{xx}+2(x-a)(y-b)f_{xy}+(y-b)^2f_{yy}]\\
	+\frac{1}{3!}\cdot [(x-a)^3f_{xxx}+3(x-a)^2(y-b)f_{xxy}+3(x-a)(y-b)^2f_{xyy}+(y-b)^3f_{yyy}]
	\end{align}
	$$
* Approximating (h,k) around (a,b). (Just another form)
	* $$
	\begin{align}
	f(a+h,b+k) = f(a,b)+[hf_x+kf_y]+\frac{1}{2!}[h^2f_{xx}+2hkf_{xy}+k^2f_{yy}]\\
	+\frac{1}{3!}[h^3f_{xxx}+3h^2kf_{xxy}+3hk^2f_{xyy}+k^3f_{yyy}]+...
	\end{align}
	$$

