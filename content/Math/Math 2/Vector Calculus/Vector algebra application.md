---
title: Vector algebra application
weight: 6
---
This note will contain some basic relations from vector algebra and their application in vector calculus

# Double cross product

$$
\begin{align*}
\vec a \times (\vec b \times \vec c) = (\vec a \cdot \vec c)\vec b-(\vec a \cdot \vec b)\vec c
\end{align*}
$$

## Curl of Curl of a vector field

This is not a proof using the Grassmann identity, but just a way to remember it.

$$
\begin{align*}
\vec \nabla \times (\vec \nabla \times \vec v) = \vec \nabla (\vec \nabla \cdot \vec v) - \vec \nabla ^{2}\vec v
\end{align*}
$$

Curl of curl is equal to gradient of divergence minus laplacian


# Scalar triple product

$$
\begin{align*}
\vec a \cdot (\vec b \times \vec c)=\vec b \cdot (\vec c \times \vec a) = \vec c \cdot (\vec a \times \vec b)\\
\text{[a b c]=[b c a]=[c a b]}
\end{align*}
$$

# zero when operating twice

## Divergence of Curl

$$
\nabla \cdot (\nabla \times F) =0
$$

## Curl of gradient

$$
\begin{align*}
\nabla \times (\nabla f) = \vec 0
\end{align*}
$$