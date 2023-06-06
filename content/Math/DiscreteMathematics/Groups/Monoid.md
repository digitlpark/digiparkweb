A [[Math/DiscreteMathematics/Groups/Semigroup|semigroup]] (S,\*) is called a monoid if there exists an element e∈S such that (a\*e)=(e\*a)=a ∀a∈S
Element 'e' is called identity element of S wrt '\*'

### Example
* (Z,+): yes
	* It is a semigroup because it has the properties of closure and associativity.
	* a+e=a ∀a∈Z, then we know that e=0. There exists an identity element of Z wrt '+'
* (N,\*): yes
	* It is a semigroup because it has the properties of closure and associativity.
	* a\*e=a ∀a∈N, e=1. There exists an identity element of N wrt '\*'
* (R,÷): no
	* It is not an algebraic structure because real numbers are not closer under division (cuz of 0)
* (R*,÷): no
	* It is an algebraic structure but not a semigroup because it doesn't follow associative property
* (S={2ⁿ; n∈Z}, \*): yes
	* We know it's a semigroup because it has the properties of closure and associativity.
	* 2ⁿ\*2ˣ=2ⁿ ∀n∈Z. 2ˣ=1 => x=0∈Z. There exists an identity element of S wrt '\*'