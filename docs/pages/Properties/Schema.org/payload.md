import Link from 'next/link'
  
import Grid from '@components/Grid'

# payload

The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.<br/><br/>

Typical unit code(s): KGM for kilogram, LBR for pound<br/><br/>

<ul>
<li>Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of <Link href="/weight">weight</Link> and <a class="localLink" href="/payload">payload</a></li>
<li>Note 2: You can indicate additional information in the <a class="localLink" href="/name">name</a> of the <a class="localLink" href="/QuantitativeValue">QuantitativeValue</a> node.</li>
<li>Note 3: You may also link to a <a class="localLink" href="/QualitativeValue">QualitativeValue</a> node that provides additional information using <a class="localLink" href="/valueReference">valueReference</a>.</li>
<li>Note 4: Note that you can use <a class="localLink" href="/minValue">minValue</a> and <a class="localLink" href="/maxValue">maxValue</a> to indicate ranges.</li>
</ul>

## Property of



