import Link from 'next/link'

# StatisticalPopulation

A StatisticalPopulation is a set of instances of a certain given type that satisfy some set of constraints. The property <Link href="/populationType">populationType</Link> is used to specify the type. Any property that can be used on instances of that type can appear on the statistical population. For example, a <a class="localLink" href="/StatisticalPopulation">StatisticalPopulation</a> representing all <a class="localLink" href="/Person">Person</a>s with a <a class="localLink" href="/homeLocation">homeLocation</a> of East Podunk California would be described by applying the appropriate <a class="localLink" href="/homeLocation">homeLocation</a> and <a class="localLink" href="/populationType">populationType</a> properties to a <a class="localLink" href="/StatisticalPopulation">StatisticalPopulation</a> item that stands for that set of people.
The properties <a class="localLink" href="/numConstraints">numConstraints</a> and <a class="localLink" href="/constrainingProperty">constrainingProperty</a> are used to specify which of the populations properties are used to specify the population. Note that the sense of "population" used here is the general sense of a statistical
population, and does not imply that the population consists of people. For example, a <a class="localLink" href="/populationType">populationType</a> of <a class="localLink" href="/Event">Event</a> or <a class="localLink" href="/NewsArticle">NewsArticle</a> could be used. See also <a class="localLink" href="/Observation">Observation</a>, and the <a href="/docs/data-and-datasets.html">data and datasets</a> overview for more details.

## Properties

<Grid>
* [additionalType](/Properties/Schema.org/additionalType)
,* [alternateName](/Properties/Schema.org/alternateName)
,* [constrainingProperty](/Properties/Schema.org/constrainingProperty)
,* [description](/Properties/Schema.org/description)
,* [disambiguatingDescription](/Properties/Schema.org/disambiguatingDescription)
,* [identifier](/Properties/Schema.org/identifier)
,* [image](/Properties/Schema.org/image)
,* [mainEntityOfPage](/Properties/Schema.org/mainEntityOfPage)
,* [name](/Properties/Schema.org/name)
,* [numConstraints](/Properties/Schema.org/numConstraints)
,* [populationType](/Properties/Schema.org/populationType)
,* [potentialAction](/Properties/Schema.org/potentialAction)
,* [sameAs](/Properties/Schema.org/sameAs)
,* [subjectOf](/Properties/Schema.org/subjectOf)
,* [url](/Properties/Schema.org/url)

</Grid>

