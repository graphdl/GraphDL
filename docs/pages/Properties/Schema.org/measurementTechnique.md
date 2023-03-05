import Link from 'next/link'
  
import Grid from '@components/Grid'

# measurementTechnique

A technique or technology used in a <Link href="/Dataset">Dataset</Link> (or <a class="localLink" href="/DataDownload">DataDownload</a>, <a class="localLink" href="/DataCatalog">DataCatalog</a>),
corresponding to the method used for measuring the corresponding variable(s) (described using <a class="localLink" href="/variableMeasured">variableMeasured</a>). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.<br/><br/>

For example, if <a class="localLink" href="/variableMeasured">variableMeasured</a> is: molecule concentration, <a class="localLink" href="/measurementTechnique">measurementTechnique</a> could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".<br/><br/>

If the <a class="localLink" href="/variableMeasured">variableMeasured</a> is "depression rating", the <a class="localLink" href="/measurementTechnique">measurementTechnique</a> could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".<br/><br/>

If there are several <a class="localLink" href="/variableMeasured">variableMeasured</a> properties recorded for some given data object, use a <a class="localLink" href="/PropertyValue">PropertyValue</a> for each <a class="localLink" href="/variableMeasured">variableMeasured</a> and attach the corresponding <a class="localLink" href="/measurementTechnique">measurementTechnique</a>.

## Property of



