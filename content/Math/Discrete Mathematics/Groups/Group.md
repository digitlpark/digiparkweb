A [[Math/Discrete Mathematics/Groups/Monoid|monoid]] (S,\*) with identity element 'e' is called a group if to each element a∈S, there exist an element b∈S such that (a\*b)=(b\*a)=e
then 'b' is called inverse of a (denoted as a⁻¹).
b=a⁻¹ and a=b⁻¹

### Example
* (Z,+): yes
	* It is a monoid because it has the properties of closure, associativity, and has an identity element '0'.
	* a+b=e=0 ∀a∈Z. b=-a∈Z. 'a' has an inverse b=-a
* (R,⋅): no
	* It is a monoid because it has the properties of closure, associativity and has an identity element '1'
	* a⋅b=1 ∀a∈R b=1/a but for a=0, an inverse 'b' doesn't exist under multiplication belonging to the set R.
	* *But (R\*,⋅) is a group when we exclude 0 from R.*
