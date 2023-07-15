---
title: Divergence and Curl
weight: 3
---
# Divergence

$$
\text{div }\vec v=\vec \nabla \cdot \vec v
$$

> If $\text{div }\vec v$=0, then $\vec v$ is called **solenoidal**

## Physical Interpretation

Consider a fluid flow with $\vec v=v_x(x,y,z)+v_y(x,y,z)+v_z(x,y,z)$

Let's calculate the change in fluid flux in unit volume

$$
\begin{align*}
\Delta_x=(v_x(x+\delta x,y,z))dydz-(v_x(x,y,z))dydz\\
=(v_x(x,y,z)+\frac{\partial v_x}{\partial x}\delta x)dydz-(v_x(x,y,z))dydz\\
=\frac{\partial v_x}{\partial x}dxdydz\\
\Delta_y=\frac{\partial v_y}{\partial y}dxdydz\\
\Delta_z=\frac{\partial v_z}{\partial z}dxdydz\\
\\
\Delta=\Delta_x+\Delta_y+\Delta_z\\
=(\frac{\partial v_x}{\partial x}+\frac{\partial v_y}{\partial ŷ}+\frac{\partial v_z}{\partial z})dxdydz\\
\frac{\Delta}{dV}=\text{div }\vec v
\end{align*}
$$

If $(\text{div }\vec v)_P$
* \> 0: P is a source
* < 0: P is a sink

# Curl

$$
\text{curl }\vec v=\vec \nabla \times \vec v
$$

> If curl $\vec v=\vec 0$ then $\vec v$ is called **irrotational**


If a vector field is irrotational, then $\exists \phi \text{ such that }\vec v=\vec \nabla \phi$ where ϕ is a **scalar potential field**.
Such a vector field is called **conservative**.

∴ curl of a gradient of a scalar function= $\vec 0$