A [[Math/DiscreteMathematics/Relation/Relation#Relation|relation]] 'R' on a set 'A' is said to be irreflexive if (x,x)∉R ∀x∈A

### Note
Not reflexive ≠ Irreflexive

#### Example
If A={1,2,3} and R={(1,1),(2,2)}
R is ***not reflexive*** because (3,3)∉R and that doesn't mean it's irreflexive. It's also not irreflexive because (1,1),(2,2)∈R

## How many irreflexive relations possible?
If |A|=n
Number of reflexive relations: 2^(n²-n)
Same as that for [[Math/DiscreteMathematics/Relation/Reflexive Relation#How many reflexive relations possible?|reflexive]].

### Example
A={1,2}
|A|=2
A×A=

| | | 
| ----------- | ----------- | 
| (1,1) | (1,2) | 
| (2,1) | (2,2) |

List of all irreflexive relations on A:
1. {}
2. {(1,2)}
3. {(2,1)}
4. {(1,2),(2,1)}

2^(2²-2)  = 4 possible relations