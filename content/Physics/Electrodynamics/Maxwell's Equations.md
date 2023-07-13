---
title: Maxwell's Equations
weight: 1
---
# Theorems

## Gauss Divergence Theorem

$$
\iiint_\Omega \nabla \cdot \vec{F}\ dV = \iint _{d\Omega} \vec{F}\cdot dS
$$

## Stokes Theorem

$$
\iint_\Sigma \nabla \times \vec{F}\ dS = \oint_{d\Sigma} \vec{F}\cdot dl
$$

# Equations
## Differential form
$$\begin{array}{r}
    Gauss\ Law:\nabla\cdot\mathbf{D}= \rho \\
    For \ magnetism:\nabla\cdot\mathbf{B}=0 \\
    Maxwell-Faraday:\nabla\times\mathbf{E}=-\frac{\partial\mathbf{B} }{\partial t} \\
    Ampere's\ Circuitual\ Law:\nabla\times\mathbf{H}= \mathbf{J}+\frac{\partial\mathbf{D} }{\partial t} 
\end{array}
$$

## Integral form
$$
\begin{array}{r}
    Gauss\ Law:\ \iint_{d\Omega}D\cdot dS= \rho \\
    For \ magnetism:\iint_{d\Omega}B\cdot dS= 0 \\
    Maxwell-Faraday: \oint_{d\Sigma}E\cdot dl= -\frac{d}{dt}\iint_\Sigma B\cdot dS \\
    Ampere's\ Circuitual\ Law: \oint_{d\Sigma}H\cdot dl= \iint_\Sigma J\cdot dS+\frac{d}{dt}\iint_\Sigma D\cdot dS 
\end{array}
$$

> E: Electric field
D: Electric displacement
B: Magnetic field
H: Magnetizing field
p: charge density
J: current density
