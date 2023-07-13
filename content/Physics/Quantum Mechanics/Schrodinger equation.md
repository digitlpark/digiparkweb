---
title: Schrodinger equation
weight: 4
---
# well, the equation

$$
i\hbar \frac{\partial \psi}{\partial t}=-\frac{\hbar^2}{2m}\frac{\partial^2\psi}{\partial x^2}+V\psi
$$

$H\psi=E\psi$
H: Hamiltonian operator
E: Energy operator

# Intuition behind the Energy Operator

https://youtu.be/QeUMFo8sODk?t=329

$$
\begin{align}
E=T+V=\frac{p^2}{2m}+V\\
General\ form\ of\ wave\ equation:\ \psi=e^{i(kx-wt)}\\
\lambda = \frac{2\pi}{k}\\
De-broglie\ wavelength: \lambda=\frac{h}{p}\\
\frac{2\pi}{k}=\frac{h}{p}\Rightarrow k=\frac{p}{\hbar}\ \ (1)\\
\\
\frac{\partial \psi}{\partial x}=ik\psi\\
\frac{\partial^2 \psi}{\partial x^2}=(ik)^2\psi =-k^2\psi \\
=-\frac{p^2}{\hbar^2}\psi \ [\because (1)] \\
-\hbar^2 \frac{\partial^2 \psi}{\partial x^2}=p^2 \psi \ \ (2)\\
\\
E=T+V\Rightarrow E\psi = T\psi + V\psi\\
\frac{p^2}{2m}\psi + V\psi \\
E\psi=-\frac{\hbar^2}{2m}\frac{\partial^2 \psi}{\partial x^2} + V\psi 
\end{align}
$$

Rearranging the terms in this equation, we get the time independent schrodinger equation.
# Intuition behind the hamiltonian operator

https://youtu.be/QeUMFo8sODk?t=363

$$
\begin{align}
\psi = e^{i(kx-wt)}\\
w=2\pi v\ and\ E=hv=hw/2\pi=\hbar w\\\\
\frac{\partial \psi}{\partial t}=-iw\psi=-i\frac{E}{\hbar}\psi \\
\Leftrightarrow i\hbar \frac{\partial \psi}{\partial t}=E\psi
\end{align}
$$

Equating this to the energy operator expression from [[#Intuition behind the Energy Operator]], we get the time dependent schrodinger equation.