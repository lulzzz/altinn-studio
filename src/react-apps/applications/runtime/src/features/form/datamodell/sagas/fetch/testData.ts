export const testData: any = {
  "Org": "jesper",
  "ServiceName": "Test",
  "RepositoryName": "Test",
  "ServiceId": null,
  "Elements": {
    "Skjema.skjemanummer": {
      "ID": "Skjema.skjemanummer",
      "ParentElement": "Skjema",
      "TypeName": "Integer",
      "Name": "skjemanummer",
      "DataBindingName": null,
      "XPath": "/Skjema/skjemanummer",
      "Restrictions": {},
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "Integer",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "skjemanummer",
      "IsTagContent": false,
      "FixedValue": "1388",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/skjemanummer",
      "DisplayString": "Skjema.skjemanummer : [1..1] Integer"
    },
    "Skjema.spesifikasjonsnummer": {
      "ID": "Skjema.spesifikasjonsnummer",
      "ParentElement": "Skjema",
      "TypeName": "Integer",
      "Name": "spesifikasjonsnummer",
      "DataBindingName": null,
      "XPath": "/Skjema/spesifikasjonsnummer",
      "Restrictions": {},
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "Integer",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "spesifikasjonsnummer",
      "IsTagContent": false,
      "FixedValue": "8760",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/spesifikasjonsnummer",
      "DisplayString": "Skjema.spesifikasjonsnummer : [1..1] Integer"
    },
    "Skjema.blankettnummer": {
      "ID": "Skjema.blankettnummer",
      "ParentElement": "Skjema",
      "TypeName": "String",
      "Name": "blankettnummer",
      "DataBindingName": null,
      "XPath": "/Skjema/blankettnummer",
      "Restrictions": {},
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "String",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "blankettnummer",
      "IsTagContent": false,
      "FixedValue": "RA-0638",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/blankettnummer",
      "DisplayString": "Skjema.blankettnummer : [0..1] String"
    },
    "Skjema.tittel": {
      "ID": "Skjema.tittel",
      "ParentElement": "Skjema",
      "TypeName": "String",
      "Name": "tittel",
      "DataBindingName": null,
      "XPath": "/Skjema/tittel",
      "Restrictions": {},
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "String",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "tittel",
      "IsTagContent": false,
      "FixedValue": "Investeringer i utlandet",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/tittel",
      "DisplayString": "Skjema.tittel : [0..1] String"
    },
    "Skjema.gruppeid": {
      "ID": "Skjema.gruppeid",
      "ParentElement": "Skjema",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7950",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/gruppeid",
      "DisplayString": "Skjema.gruppeid : [0..1] Integer"
    },
    "Skjema.etatid": {
      "ID": "Skjema.etatid",
      "ParentElement": "Skjema",
      "TypeName": "String",
      "Name": "etatid",
      "DataBindingName": "etatid",
      "XPath": "/Skjema/etatid",
      "Restrictions": {
        "enumeration": {
          "Value": "971526920",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "String",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "etatid",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/etatid",
      "DisplayString": "Skjema.etatid : [0..1] String"
    },
    "Skjema.GenerellInformasjongrp7951.gruppeid": {
      "ID": "Skjema.GenerellInformasjongrp7951.gruppeid",
      "ParentElement": "Skjema.GenerellInformasjongrp7951",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/GenerellInformasjongrp7951/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7951",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/GenerellInformasjon-grp-7951/properties/gruppeid",
      "DisplayString": "Skjema.GenerellInformasjongrp7951.gruppeid : [1..1] Integer"
    },
    "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296.orid": {
      "ID": "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296.orid",
      "ParentElement": "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/GenerellInformasjongrp7951/OppgaveInnsendelseFristdatadef16296/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "16296",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OppgaveInnsendelseFrist-datadef-16296/properties/orid",
      "DisplayString": "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296.orid : [1..1] Integer"
    },
    "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296.value": {
      "ID": "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296.value",
      "ParentElement": "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296",
      "TypeName": "Dato1999010129991231repformat47",
      "Name": "value",
      "DataBindingName": "generellInformasjongrp7951.oppgaveInnsendelseFristdatadef16296.value",
      "XPath": "/Skjema/GenerellInformasjongrp7951/OppgaveInnsendelseFristdatadef16296/value",
      "Restrictions": {},
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Date",
      "Texts": {
        "Label": "16296.OppgaveInnsendelseFristdatadef16296.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OppgaveInnsendelseFrist-datadef-16296/properties/value",
      "DisplayString": "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296.value : [1..1] Dato1999010129991231repformat47"
    },
    "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296": {
      "ID": "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296",
      "ParentElement": "Skjema.GenerellInformasjongrp7951",
      "TypeName": "OppgaveInnsendelseFristdatadef16296",
      "Name": "OppgaveInnsendelseFristdatadef16296",
      "DataBindingName": null,
      "XPath": "/Skjema/GenerellInformasjongrp7951/OppgaveInnsendelseFristdatadef16296",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "16296.OppgaveInnsendelseFristdatadef16296.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "OppgaveInnsendelseFrist-datadef-16296",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/GenerellInformasjon-grp-7951/properties/OppgaveInnsendelseFrist-datadef-16296",
      "DisplayString": "Skjema.GenerellInformasjongrp7951.OppgaveInnsendelseFristdatadef16296 : [0..1] OppgaveInnsendelseFristdatadef16296"
    },
    "Skjema.GenerellInformasjongrp7951": {
      "ID": "Skjema.GenerellInformasjongrp7951",
      "ParentElement": "Skjema",
      "TypeName": "GenerellInformasjongrp7951",
      "Name": "GenerellInformasjongrp7951",
      "DataBindingName": null,
      "XPath": "/Skjema/GenerellInformasjongrp7951",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "GenerellInformasjon-grp-7951",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/GenerellInformasjon-grp-7951",
      "DisplayString": "Skjema.GenerellInformasjongrp7951 : [0..1] GenerellInformasjongrp7951"
    },
    "Skjema.Rapporteringsargrp7952.gruppeid": {
      "ID": "Skjema.Rapporteringsargrp7952.gruppeid",
      "ParentElement": "Skjema.Rapporteringsargrp7952",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsargrp7952/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7952",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Rapporteringsar-grp-7952/properties/gruppeid",
      "DisplayString": "Skjema.Rapporteringsargrp7952.gruppeid : [1..1] Integer"
    },
    "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236.orid": {
      "ID": "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236.orid",
      "ParentElement": "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsargrp7952/OppgaveArdatadef11236/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "11236",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OppgaveAr-datadef-11236/properties/orid",
      "DisplayString": "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236.orid : [1..1] Integer"
    },
    "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236.value": {
      "ID": "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236.value",
      "ParentElement": "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236",
      "TypeName": "Ar44repformat6",
      "Name": "value",
      "DataBindingName": "rapporteringsargrp7952.oppgaveArdatadef11236.value",
      "XPath": "/Skjema/Rapporteringsargrp7952/OppgaveArdatadef11236/value",
      "Restrictions": {},
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "GYear",
      "Texts": {
        "Label": "11236.OppgaveArdatadef11236.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OppgaveAr-datadef-11236/properties/value",
      "DisplayString": "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236.value : [1..1] Ar44repformat6"
    },
    "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236": {
      "ID": "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236",
      "ParentElement": "Skjema.Rapporteringsargrp7952",
      "TypeName": "OppgaveArdatadef11236",
      "Name": "OppgaveArdatadef11236",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsargrp7952/OppgaveArdatadef11236",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "11236.OppgaveArdatadef11236.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "OppgaveAr-datadef-11236",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Rapporteringsar-grp-7952/properties/OppgaveAr-datadef-11236",
      "DisplayString": "Skjema.Rapporteringsargrp7952.OppgaveArdatadef11236 : [1..1] OppgaveArdatadef11236"
    },
    "Skjema.Rapporteringsargrp7952": {
      "ID": "Skjema.Rapporteringsargrp7952",
      "ParentElement": "Skjema",
      "TypeName": "Rapporteringsargrp7952",
      "Name": "Rapporteringsargrp7952",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsargrp7952",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "Rapporteringsar-grp-7952",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/Rapporteringsar-grp-7952",
      "DisplayString": "Skjema.Rapporteringsargrp7952 : [0..1] Rapporteringsargrp7952"
    },
    "Skjema.Rapporteringsenhetgrp7953.gruppeid": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.gruppeid",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7953",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Rapporteringsenhet-grp-7953/properties/gruppeid",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.gruppeid : [1..1] Integer"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1.orid": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1.orid",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetNavndatadef1/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "1",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetNavn-datadef-1/properties/orid",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1.orid : [1..1] Integer"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1.value": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1.value",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1",
      "TypeName": "Tekst175repformat8",
      "Name": "value",
      "DataBindingName": "rapporteringsenhetgrp7953.enhetNavndatadef1.value",
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetNavndatadef1/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "175",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "1.EnhetNavndatadef1.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetNavn-datadef-1/properties/value",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1.value : [1..1] Tekst175repformat8"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953",
      "TypeName": "EnhetNavndatadef1",
      "Name": "EnhetNavndatadef1",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetNavndatadef1",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "1.EnhetNavndatadef1.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "EnhetNavn-datadef-1",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Rapporteringsenhet-grp-7953/properties/EnhetNavn-datadef-1",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetNavndatadef1 : [1..1] EnhetNavndatadef1"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18.orid": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18.orid",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetOrganisasjonsnummerdatadef18/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "18",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetOrganisasjonsnummer-datadef-18/properties/orid",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18.orid : [1..1] Integer"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18.value": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18.value",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18",
      "TypeName": "Tekst99Modulus11repformat1",
      "Name": "value",
      "DataBindingName": "rapporteringsenhetgrp7953.enhetOrganisasjonsnummerdatadef18.value",
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetOrganisasjonsnummerdatadef18/value",
      "Restrictions": {
        "length": {
          "Value": "9",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "18.EnhetOrganisasjonsnummerdatadef18.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetOrganisasjonsnummer-datadef-18/properties/value",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18.value : [1..1] Tekst99Modulus11repformat1"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953",
      "TypeName": "EnhetOrganisasjonsnummerdatadef18",
      "Name": "EnhetOrganisasjonsnummerdatadef18",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetOrganisasjonsnummerdatadef18",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "18.EnhetOrganisasjonsnummerdatadef18.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "EnhetOrganisasjonsnummer-datadef-18",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Rapporteringsenhet-grp-7953/properties/EnhetOrganisasjonsnummer-datadef-18",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetOrganisasjonsnummerdatadef18 : [1..1] EnhetOrganisasjonsnummerdatadef18"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14.orid": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14.orid",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetPostadressedatadef14/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "14",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetPostadresse-datadef-14/properties/orid",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14.orid : [1..1] Integer"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14.value": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14.value",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14",
      "TypeName": "Tekst105repformat9",
      "Name": "value",
      "DataBindingName": "rapporteringsenhetgrp7953.enhetPostadressedatadef14.value",
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetPostadressedatadef14/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "105",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "14.EnhetPostadressedatadef14.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetPostadresse-datadef-14/properties/value",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14.value : [1..1] Tekst105repformat9"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953",
      "TypeName": "EnhetPostadressedatadef14",
      "Name": "EnhetPostadressedatadef14",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetPostadressedatadef14",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "14.EnhetPostadressedatadef14.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "EnhetPostadresse-datadef-14",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Rapporteringsenhet-grp-7953/properties/EnhetPostadresse-datadef-14",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetPostadressedatadef14 : [1..1] EnhetPostadressedatadef14"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673.orid": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673.orid",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetPostnummerdatadef6673/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "6673",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetPostnummer-datadef-6673/properties/orid",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673.orid : [1..1] Integer"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673.value": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673.value",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673",
      "TypeName": "Tekst44BareTallrepformat10",
      "Name": "value",
      "DataBindingName": "rapporteringsenhetgrp7953.enhetPostnummerdatadef6673.value",
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetPostnummerdatadef6673/value",
      "Restrictions": {
        "length": {
          "Value": "4",
          "ErrortText": null
        },
        "pattern": {
          "Value": "[0-9]{4}",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "6673.EnhetPostnummerdatadef6673.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetPostnummer-datadef-6673/properties/value",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673.value : [1..1] Tekst44BareTallrepformat10"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953",
      "TypeName": "EnhetPostnummerdatadef6673",
      "Name": "EnhetPostnummerdatadef6673",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetPostnummerdatadef6673",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "6673.EnhetPostnummerdatadef6673.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "EnhetPostnummer-datadef-6673",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Rapporteringsenhet-grp-7953/properties/EnhetPostnummer-datadef-6673",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetPostnummerdatadef6673 : [1..1] EnhetPostnummerdatadef6673"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674.orid": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674.orid",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetPoststeddatadef6674/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "6674",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetPoststed-datadef-6674/properties/orid",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674.orid : [1..1] Integer"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674.value": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674.value",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674",
      "TypeName": "Tekst35repformat3",
      "Name": "value",
      "DataBindingName": "rapporteringsenhetgrp7953.enhetPoststeddatadef6674.value",
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetPoststeddatadef6674/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "35",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "6674.EnhetPoststeddatadef6674.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetPoststed-datadef-6674/properties/value",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674.value : [1..1] Tekst35repformat3"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953",
      "TypeName": "EnhetPoststeddatadef6674",
      "Name": "EnhetPoststeddatadef6674",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetPoststeddatadef6674",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "6674.EnhetPoststeddatadef6674.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "EnhetPoststed-datadef-6674",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Rapporteringsenhet-grp-7953/properties/EnhetPoststed-datadef-6674",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetPoststeddatadef6674 : [1..1] EnhetPoststeddatadef6674"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591.orid": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591.orid",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetEPostdatadef21591/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "21591",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetEPost-datadef-21591/properties/orid",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591.orid : [1..1] Integer"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591.value": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591.value",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591",
      "TypeName": "Tekst100repformat48",
      "Name": "value",
      "DataBindingName": "rapporteringsenhetgrp7953.enhetEPostdatadef21591.value",
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetEPostdatadef21591/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "100",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "21591.EnhetEPostdatadef21591.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EnhetEPost-datadef-21591/properties/value",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591.value : [1..1] Tekst100repformat48"
    },
    "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591": {
      "ID": "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591",
      "ParentElement": "Skjema.Rapporteringsenhetgrp7953",
      "TypeName": "EnhetEPostdatadef21591",
      "Name": "EnhetEPostdatadef21591",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953/EnhetEPostdatadef21591",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "21591.EnhetEPostdatadef21591.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "EnhetEPost-datadef-21591",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Rapporteringsenhet-grp-7953/properties/EnhetEPost-datadef-21591",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953.EnhetEPostdatadef21591 : [1..1] EnhetEPostdatadef21591"
    },
    "Skjema.Rapporteringsenhetgrp7953": {
      "ID": "Skjema.Rapporteringsenhetgrp7953",
      "ParentElement": "Skjema",
      "TypeName": "Rapporteringsenhetgrp7953",
      "Name": "Rapporteringsenhetgrp7953",
      "DataBindingName": null,
      "XPath": "/Skjema/Rapporteringsenhetgrp7953",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "Rapporteringsenhet-grp-7953",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/Rapporteringsenhet-grp-7953",
      "DisplayString": "Skjema.Rapporteringsenhetgrp7953 : [0..1] Rapporteringsenhetgrp7953"
    },
    "Skjema.Kontaktpersongrp7954.gruppeid": {
      "ID": "Skjema.Kontaktpersongrp7954.gruppeid",
      "ParentElement": "Skjema.Kontaktpersongrp7954",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/Kontaktpersongrp7954/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7954",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Kontaktperson-grp-7954/properties/gruppeid",
      "DisplayString": "Skjema.Kontaktpersongrp7954.gruppeid : [1..1] Integer"
    },
    "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2.orid": {
      "ID": "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2.orid",
      "ParentElement": "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/Kontaktpersongrp7954/KontaktpersonNavndatadef2/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "2",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/KontaktpersonNavn-datadef-2/properties/orid",
      "DisplayString": "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2.orid : [1..1] Integer"
    },
    "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2.value": {
      "ID": "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2.value",
      "ParentElement": "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2",
      "TypeName": "Tekst150repformat13",
      "Name": "value",
      "DataBindingName": "kontaktpersongrp7954.kontaktpersonNavndatadef2.value",
      "XPath": "/Skjema/Kontaktpersongrp7954/KontaktpersonNavndatadef2/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "150",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "2.KontaktpersonNavndatadef2.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/KontaktpersonNavn-datadef-2/properties/value",
      "DisplayString": "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2.value : [1..1] Tekst150repformat13"
    },
    "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2": {
      "ID": "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2",
      "ParentElement": "Skjema.Kontaktpersongrp7954",
      "TypeName": "KontaktpersonNavndatadef2",
      "Name": "KontaktpersonNavndatadef2",
      "DataBindingName": null,
      "XPath": "/Skjema/Kontaktpersongrp7954/KontaktpersonNavndatadef2",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "2.KontaktpersonNavndatadef2.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "KontaktpersonNavn-datadef-2",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Kontaktperson-grp-7954/properties/KontaktpersonNavn-datadef-2",
      "DisplayString": "Skjema.Kontaktpersongrp7954.KontaktpersonNavndatadef2 : [1..1] KontaktpersonNavndatadef2"
    },
    "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3.orid": {
      "ID": "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3.orid",
      "ParentElement": "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/Kontaktpersongrp7954/KontaktpersonTelefonnummerdatadef3/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "3",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/KontaktpersonTelefonnummer-datadef-3/properties/orid",
      "DisplayString": "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3.orid : [1..1] Integer"
    },
    "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3.value": {
      "ID": "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3.value",
      "ParentElement": "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3",
      "TypeName": "Tekst13repformat12",
      "Name": "value",
      "DataBindingName": "kontaktpersongrp7954.kontaktpersonTelefonnummerdatadef3.value",
      "XPath": "/Skjema/Kontaktpersongrp7954/KontaktpersonTelefonnummerdatadef3/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "13",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "3.KontaktpersonTelefonnummerdatadef3.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/KontaktpersonTelefonnummer-datadef-3/properties/value",
      "DisplayString": "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3.value : [1..1] Tekst13repformat12"
    },
    "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3": {
      "ID": "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3",
      "ParentElement": "Skjema.Kontaktpersongrp7954",
      "TypeName": "KontaktpersonTelefonnummerdatadef3",
      "Name": "KontaktpersonTelefonnummerdatadef3",
      "DataBindingName": null,
      "XPath": "/Skjema/Kontaktpersongrp7954/KontaktpersonTelefonnummerdatadef3",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "3.KontaktpersonTelefonnummerdatadef3.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "KontaktpersonTelefonnummer-datadef-3",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Kontaktperson-grp-7954/properties/KontaktpersonTelefonnummer-datadef-3",
      "DisplayString": "Skjema.Kontaktpersongrp7954.KontaktpersonTelefonnummerdatadef3 : [1..1] KontaktpersonTelefonnummerdatadef3"
    },
    "Skjema.Kontaktpersongrp7954": {
      "ID": "Skjema.Kontaktpersongrp7954",
      "ParentElement": "Skjema",
      "TypeName": "Kontaktpersongrp7954",
      "Name": "Kontaktpersongrp7954",
      "DataBindingName": null,
      "XPath": "/Skjema/Kontaktpersongrp7954",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "Kontaktperson-grp-7954",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/Kontaktperson-grp-7954",
      "DisplayString": "Skjema.Kontaktpersongrp7954 : [0..1] Kontaktpersongrp7954"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.gruppeid": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.gruppeid",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7955",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerOmDetUtenlandskeForetaket-grp-7955/properties/gruppeid",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.gruppeid : [1..1] Integer"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287.orid": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287.orid",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskNavndatadef30287/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "30287",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskNavn-datadef-30287/properties/orid",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287.value": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287.value",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287",
      "TypeName": "Tekst175repformat8",
      "Name": "value",
      "DataBindingName": "opplysningerOmDetUtenlandskeForetaketgrp7955.foretakUtenlandskNavndatadef30287.value",
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskNavndatadef30287/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "175",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "30287.ForetakUtenlandskNavndatadef30287.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskNavn-datadef-30287/properties/value",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287.value : [1..1] Tekst175repformat8"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "TypeName": "ForetakUtenlandskNavndatadef30287",
      "Name": "ForetakUtenlandskNavndatadef30287",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskNavndatadef30287",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "30287.ForetakUtenlandskNavndatadef30287.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "ForetakUtenlandskNavn-datadef-30287",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerOmDetUtenlandskeForetaket-grp-7955/properties/ForetakUtenlandskNavn-datadef-30287",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskNavndatadef30287 : [1..1] ForetakUtenlandskNavndatadef30287"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288.orid": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288.orid",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskIdKodeHjemlanddatadef30288/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "30288",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskIdKodeHjemland-datadef-30288/properties/orid",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288.value": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288.value",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288",
      "TypeName": "Tekst20repformat85",
      "Name": "value",
      "DataBindingName": "opplysningerOmDetUtenlandskeForetaketgrp7955.foretakUtenlandskIdKodeHjemlanddatadef30288.value",
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskIdKodeHjemlanddatadef30288/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "20",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "30288.ForetakUtenlandskIdKodeHjemlanddatadef30288.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskIdKodeHjemland-datadef-30288/properties/value",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288.value : [1..1] Tekst20repformat85"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "TypeName": "ForetakUtenlandskIdKodeHjemlanddatadef30288",
      "Name": "ForetakUtenlandskIdKodeHjemlanddatadef30288",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskIdKodeHjemlanddatadef30288",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "30288.ForetakUtenlandskIdKodeHjemlanddatadef30288.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "ForetakUtenlandskIdKodeHjemland-datadef-30288",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerOmDetUtenlandskeForetaket-grp-7955/properties/ForetakUtenlandskIdKodeHjemland-datadef-30288",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskIdKodeHjemlanddatadef30288 : [0..1] ForetakUtenlandskIdKodeHjemlanddatadef30288"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954.orid": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954.orid",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskLanddatadef31954/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31954",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskLand-datadef-31954/properties/orid",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954.value": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954.value",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954",
      "TypeName": "KodelisteEttValg50Landrepformat967",
      "Name": "value",
      "DataBindingName": "opplysningerOmDetUtenlandskeForetaketgrp7955.foretakUtenlandskLanddatadef31954.value",
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskLanddatadef31954/value",
      "Restrictions": {
        "length": {
          "Value": "2",
          "ErrortText": null
        },
        "enumeration": {
          "Value": "AU;BE;BM;BR;CA;KY;CL;DK;AE;EG;EE;FI;FR;GR;HK;IN;IE;IS;IT;JP;CN;CY;LV;LT;LU;MY;MX;NL;NZ;PK;PA;PE;PL;PT;RU;SG;ES;GB;CH;SE;ZA;KR;TH;CZ;TR;DE;US;UA;HU;AT",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "31954.ForetakUtenlandskLanddatadef31954.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskLand-datadef-31954/properties/value",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954.value : [1..1] KodelisteEttValg50Landrepformat967"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "TypeName": "ForetakUtenlandskLanddatadef31954",
      "Name": "ForetakUtenlandskLanddatadef31954",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskLanddatadef31954",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31954.ForetakUtenlandskLanddatadef31954.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "ForetakUtenlandskLand-datadef-31954",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerOmDetUtenlandskeForetaket-grp-7955/properties/ForetakUtenlandskLand-datadef-31954",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31954 : [0..1] ForetakUtenlandskLanddatadef31954"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700.orid": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700.orid",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskLanddatadef31700/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31700",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskLand-datadef-31700/properties/orid",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700.value": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700.value",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700",
      "TypeName": "Tekst40repformat53",
      "Name": "value",
      "DataBindingName": "opplysningerOmDetUtenlandskeForetaketgrp7955.foretakUtenlandskLanddatadef31700.value",
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskLanddatadef31700/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "40",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "31700.ForetakUtenlandskLanddatadef31700.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskLand-datadef-31700/properties/value",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700.value : [1..1] Tekst40repformat53"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "TypeName": "ForetakUtenlandskLanddatadef31700",
      "Name": "ForetakUtenlandskLanddatadef31700",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskLanddatadef31700",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31700.ForetakUtenlandskLanddatadef31700.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "ForetakUtenlandskLand-datadef-31700",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerOmDetUtenlandskeForetaket-grp-7955/properties/ForetakUtenlandskLand-datadef-31700",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskLanddatadef31700 : [0..1] ForetakUtenlandskLanddatadef31700"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289.orid": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289.orid",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskInternIdKodedatadef30289/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "30289",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskInternIdKode-datadef-30289/properties/orid",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289.value": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289.value",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289",
      "TypeName": "Tekst20repformat85",
      "Name": "value",
      "DataBindingName": "opplysningerOmDetUtenlandskeForetaketgrp7955.foretakUtenlandskInternIdKodedatadef30289.value",
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskInternIdKodedatadef30289/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "20",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "30289.ForetakUtenlandskInternIdKodedatadef30289.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskInternIdKode-datadef-30289/properties/value",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289.value : [1..1] Tekst20repformat85"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "TypeName": "ForetakUtenlandskInternIdKodedatadef30289",
      "Name": "ForetakUtenlandskInternIdKodedatadef30289",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskInternIdKodedatadef30289",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "30289.ForetakUtenlandskInternIdKodedatadef30289.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "ForetakUtenlandskInternIdKode-datadef-30289",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerOmDetUtenlandskeForetaket-grp-7955/properties/ForetakUtenlandskInternIdKode-datadef-30289",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskInternIdKodedatadef30289 : [0..1] ForetakUtenlandskInternIdKodedatadef30289"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955.orid": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955.orid",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskBransjeNaringdatadef31955/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31955",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskBransjeNaring-datadef-31955/properties/orid",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955.value": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955.value",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955",
      "TypeName": "KodelisteEttValg26BransjeNaringrepformat968",
      "Name": "value",
      "DataBindingName": "opplysningerOmDetUtenlandskeForetaketgrp7955.foretakUtenlandskBransjeNaringdatadef31955.value",
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskBransjeNaringdatadef31955/value",
      "Restrictions": {
        "minLength": {
          "Value": "2",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "3",
          "ErrortText": null
        },
        "enumeration": {
          "Value": "A00;A03;B06;B00;C10;C13;C16;C17;C19;C00;D00;E00;F00;G00;I00;H50;H51;H00;J61;J00;K00;L00;Q00;R00;S00;XX",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "31955.ForetakUtenlandskBransjeNaringdatadef31955.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskBransjeNaring-datadef-31955/properties/value",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955.value : [1..1] KodelisteEttValg26BransjeNaringrepformat968"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "TypeName": "ForetakUtenlandskBransjeNaringdatadef31955",
      "Name": "ForetakUtenlandskBransjeNaringdatadef31955",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskBransjeNaringdatadef31955",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31955.ForetakUtenlandskBransjeNaringdatadef31955.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "ForetakUtenlandskBransjeNaring-datadef-31955",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerOmDetUtenlandskeForetaket-grp-7955/properties/ForetakUtenlandskBransjeNaring-datadef-31955",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringdatadef31955 : [0..1] ForetakUtenlandskBransjeNaringdatadef31955"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956.orid": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956.orid",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31956",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskBransjeNaringBeskrivelse-datadef-31956/properties/orid",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956.value": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956.value",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956",
      "TypeName": "Tekst200repformat187",
      "Name": "value",
      "DataBindingName": "opplysningerOmDetUtenlandskeForetaketgrp7955.foretakUtenlandskBransjeNaringBeskrivelsedatadef31956.value",
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "200",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "31956.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskBransjeNaringBeskrivelse-datadef-31956/properties/value",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956.value : [1..1] Tekst200repformat187"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956",
      "ParentElement": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "TypeName": "ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956",
      "Name": "ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955/ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31956.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "ForetakUtenlandskBransjeNaringBeskrivelse-datadef-31956",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerOmDetUtenlandskeForetaket-grp-7955/properties/ForetakUtenlandskBransjeNaringBeskrivelse-datadef-31956",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955.ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956 : [0..1] ForetakUtenlandskBransjeNaringBeskrivelsedatadef31956"
    },
    "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955": {
      "ID": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "ParentElement": "Skjema",
      "TypeName": "OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "Name": "OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerOmDetUtenlandskeForetaketgrp7955",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "OpplysningerOmDetUtenlandskeForetaket-grp-7955",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/OpplysningerOmDetUtenlandskeForetaket-grp-7955",
      "DisplayString": "Skjema.OpplysningerOmDetUtenlandskeForetaketgrp7955 : [0..1] OpplysningerOmDetUtenlandskeForetaketgrp7955"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.gruppeid": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.gruppeid",
      "ParentElement": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7956",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EierforholdTilDetUtenlandskeForetaket-grp-7956/properties/gruppeid",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.gruppeid : [1..1] Integer"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701.orid": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701.orid",
      "ParentElement": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956/Eierskapdatadef31701/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31701",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Eierskap-datadef-31701/properties/orid",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701.orid : [1..1] Integer"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701.value": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701.value",
      "ParentElement": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701",
      "TypeName": "KodelisteEttValg2JaNeirepformat4",
      "Name": "value",
      "DataBindingName": "eierforholdTilDetUtenlandskeForetaketgrp7956.eierskapdatadef31701.value",
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956/Eierskapdatadef31701/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "3",
          "ErrortText": null
        },
        "enumeration": {
          "Value": "Ja;Nei",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "31701.Eierskapdatadef31701.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Eierskap-datadef-31701/properties/value",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701.value : [1..1] KodelisteEttValg2JaNeirepformat4"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701",
      "ParentElement": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956",
      "TypeName": "Eierskapdatadef31701",
      "Name": "Eierskapdatadef31701",
      "DataBindingName": null,
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956/Eierskapdatadef31701",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31701.Eierskapdatadef31701.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "Eierskap-datadef-31701",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EierforholdTilDetUtenlandskeForetaket-grp-7956/properties/Eierskap-datadef-31701",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.Eierskapdatadef31701 : [1..1] Eierskapdatadef31701"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290.orid": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290.orid",
      "ParentElement": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956/ForetakUtenlandskDirekteEidNavndatadef30290/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "30290",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskDirekteEidNavn-datadef-30290/properties/orid",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290.orid : [1..1] Integer"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290.value": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290.value",
      "ParentElement": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290",
      "TypeName": "Tekst175repformat8",
      "Name": "value",
      "DataBindingName": "eierforholdTilDetUtenlandskeForetaketgrp7956.foretakUtenlandskDirekteEidNavndatadef30290.value",
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956/ForetakUtenlandskDirekteEidNavndatadef30290/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "175",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "30290.ForetakUtenlandskDirekteEidNavndatadef30290.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ForetakUtenlandskDirekteEidNavn-datadef-30290/properties/value",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290.value : [1..1] Tekst175repformat8"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290",
      "ParentElement": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956",
      "TypeName": "ForetakUtenlandskDirekteEidNavndatadef30290",
      "Name": "ForetakUtenlandskDirekteEidNavndatadef30290",
      "DataBindingName": null,
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956/ForetakUtenlandskDirekteEidNavndatadef30290",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "30290.ForetakUtenlandskDirekteEidNavndatadef30290.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "ForetakUtenlandskDirekteEidNavn-datadef-30290",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EierforholdTilDetUtenlandskeForetaket-grp-7956/properties/ForetakUtenlandskDirekteEidNavn-datadef-30290",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.ForetakUtenlandskDirekteEidNavndatadef30290 : [0..1] ForetakUtenlandskDirekteEidNavndatadef30290"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702.orid": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702.orid",
      "ParentElement": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956/EierandelProsentdatadef31702/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31702",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EierandelProsent-datadef-31702/properties/orid",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702.orid : [1..1] Integer"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702.value": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702.value",
      "ParentElement": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702",
      "TypeName": "Heltall3repformat83",
      "Name": "value",
      "DataBindingName": "eierforholdTilDetUtenlandskeForetaketgrp7956.eierandelProsentdatadef31702.value",
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956/EierandelProsentdatadef31702/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "3",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "31702.EierandelProsentdatadef31702.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EierandelProsent-datadef-31702/properties/value",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702.value : [1..1] Heltall3repformat83"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702",
      "ParentElement": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956",
      "TypeName": "EierandelProsentdatadef31702",
      "Name": "EierandelProsentdatadef31702",
      "DataBindingName": null,
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956/EierandelProsentdatadef31702",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31702.EierandelProsentdatadef31702.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "EierandelProsent-datadef-31702",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EierforholdTilDetUtenlandskeForetaket-grp-7956/properties/EierandelProsent-datadef-31702",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956.EierandelProsentdatadef31702 : [1..1] EierandelProsentdatadef31702"
    },
    "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956": {
      "ID": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956",
      "ParentElement": "Skjema",
      "TypeName": "EierforholdTilDetUtenlandskeForetaketgrp7956",
      "Name": "EierforholdTilDetUtenlandskeForetaketgrp7956",
      "DataBindingName": null,
      "XPath": "/Skjema/EierforholdTilDetUtenlandskeForetaketgrp7956",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "EierforholdTilDetUtenlandskeForetaket-grp-7956",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/EierforholdTilDetUtenlandskeForetaket-grp-7956",
      "DisplayString": "Skjema.EierforholdTilDetUtenlandskeForetaketgrp7956 : [0..1] EierforholdTilDetUtenlandskeForetaketgrp7956"
    },
    "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.gruppeid": {
      "ID": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.gruppeid",
      "ParentElement": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/BokfortVerdiAvDetUtenlandskeForetaketgrp7957/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7957",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/BokfortVerdiAvDetUtenlandskeForetaket-grp-7957/properties/gruppeid",
      "DisplayString": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.gruppeid : [1..1] Integer"
    },
    "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957.orid": {
      "ID": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957.orid",
      "ParentElement": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/BokfortVerdiAvDetUtenlandskeForetaketgrp7957/VerdsettelsesmetodeUtenlandskForetakdatadef31957/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31957",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/VerdsettelsesmetodeUtenlandskForetak-datadef-31957/properties/orid",
      "DisplayString": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957.orid : [1..1] Integer"
    },
    "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957.value": {
      "ID": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957.value",
      "ParentElement": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957",
      "TypeName": "KodelisteEttValg3Verdsettelsesmetoderepformat970",
      "Name": "value",
      "DataBindingName": "bokfortVerdiAvDetUtenlandskeForetaketgrp7957.verdsettelsesmetodeUtenlandskForetakdatadef31957.value",
      "XPath": "/Skjema/BokfortVerdiAvDetUtenlandskeForetaketgrp7957/VerdsettelsesmetodeUtenlandskForetakdatadef31957/value",
      "Restrictions": {
        "length": {
          "Value": "1",
          "ErrortText": null
        },
        "enumeration": {
          "Value": "1;2;3",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "31957.VerdsettelsesmetodeUtenlandskForetakdatadef31957.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/VerdsettelsesmetodeUtenlandskForetak-datadef-31957/properties/value",
      "DisplayString": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957.value : [1..1] KodelisteEttValg3Verdsettelsesmetoderepformat970"
    },
    "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957": {
      "ID": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957",
      "ParentElement": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957",
      "TypeName": "VerdsettelsesmetodeUtenlandskForetakdatadef31957",
      "Name": "VerdsettelsesmetodeUtenlandskForetakdatadef31957",
      "DataBindingName": null,
      "XPath": "/Skjema/BokfortVerdiAvDetUtenlandskeForetaketgrp7957/VerdsettelsesmetodeUtenlandskForetakdatadef31957",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31957.VerdsettelsesmetodeUtenlandskForetakdatadef31957.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "VerdsettelsesmetodeUtenlandskForetak-datadef-31957",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/BokfortVerdiAvDetUtenlandskeForetaket-grp-7957/properties/VerdsettelsesmetodeUtenlandskForetak-datadef-31957",
      "DisplayString": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.VerdsettelsesmetodeUtenlandskForetakdatadef31957 : [1..1] VerdsettelsesmetodeUtenlandskForetakdatadef31957"
    },
    "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703.orid": {
      "ID": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703.orid",
      "ParentElement": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/BokfortVerdiAvDetUtenlandskeForetaketgrp7957/EierandelUtenlandskForetakBokfortVerdidatadef31703/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31703",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EierandelUtenlandskForetakBokfortVerdi-datadef-31703/properties/orid",
      "DisplayString": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703.orid : [1..1] Integer"
    },
    "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703.value": {
      "ID": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703.value",
      "ParentElement": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703",
      "TypeName": "BelopHeltall15repformat37",
      "Name": "value",
      "DataBindingName": "bokfortVerdiAvDetUtenlandskeForetaketgrp7957.eierandelUtenlandskForetakBokfortVerdidatadef31703.value",
      "XPath": "/Skjema/BokfortVerdiAvDetUtenlandskeForetaketgrp7957/EierandelUtenlandskForetakBokfortVerdidatadef31703/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "15",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "31703.EierandelUtenlandskForetakBokfortVerdidatadef31703.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EierandelUtenlandskForetakBokfortVerdi-datadef-31703/properties/value",
      "DisplayString": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703.value : [1..1] BelopHeltall15repformat37"
    },
    "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703": {
      "ID": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703",
      "ParentElement": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957",
      "TypeName": "EierandelUtenlandskForetakBokfortVerdidatadef31703",
      "Name": "EierandelUtenlandskForetakBokfortVerdidatadef31703",
      "DataBindingName": null,
      "XPath": "/Skjema/BokfortVerdiAvDetUtenlandskeForetaketgrp7957/EierandelUtenlandskForetakBokfortVerdidatadef31703",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31703.EierandelUtenlandskForetakBokfortVerdidatadef31703.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "EierandelUtenlandskForetakBokfortVerdi-datadef-31703",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/BokfortVerdiAvDetUtenlandskeForetaket-grp-7957/properties/EierandelUtenlandskForetakBokfortVerdi-datadef-31703",
      "DisplayString": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957.EierandelUtenlandskForetakBokfortVerdidatadef31703 : [1..1] EierandelUtenlandskForetakBokfortVerdidatadef31703"
    },
    "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957": {
      "ID": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957",
      "ParentElement": "Skjema",
      "TypeName": "BokfortVerdiAvDetUtenlandskeForetaketgrp7957",
      "Name": "BokfortVerdiAvDetUtenlandskeForetaketgrp7957",
      "DataBindingName": null,
      "XPath": "/Skjema/BokfortVerdiAvDetUtenlandskeForetaketgrp7957",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "BokfortVerdiAvDetUtenlandskeForetaket-grp-7957",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/BokfortVerdiAvDetUtenlandskeForetaket-grp-7957",
      "DisplayString": "Skjema.BokfortVerdiAvDetUtenlandskeForetaketgrp7957 : [0..1] BokfortVerdiAvDetUtenlandskeForetaketgrp7957"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.gruppeid": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.gruppeid",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7958",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958/properties/gruppeid",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.gruppeid : [1..1] Integer"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958.orid": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958.orid",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/RegnskapsoppsettIFRSdatadef31958/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31958",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/RegnskapsoppsettIFRS-datadef-31958/properties/orid",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958.value": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958.value",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958",
      "TypeName": "KodelisteEttValg2Ja1Nei2repformat971",
      "Name": "value",
      "DataBindingName": "opplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.regnskapsoppsettIFRSdatadef31958.value",
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/RegnskapsoppsettIFRSdatadef31958/value",
      "Restrictions": {
        "length": {
          "Value": "1",
          "ErrortText": null
        },
        "enumeration": {
          "Value": "1;2",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "31958.RegnskapsoppsettIFRSdatadef31958.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/RegnskapsoppsettIFRS-datadef-31958/properties/value",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958.value : [1..1] KodelisteEttValg2Ja1Nei2repformat971"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "TypeName": "RegnskapsoppsettIFRSdatadef31958",
      "Name": "RegnskapsoppsettIFRSdatadef31958",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/RegnskapsoppsettIFRSdatadef31958",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31958.RegnskapsoppsettIFRSdatadef31958.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "RegnskapsoppsettIFRS-datadef-31958",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958/properties/RegnskapsoppsettIFRS-datadef-31958",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.RegnskapsoppsettIFRSdatadef31958 : [1..1] RegnskapsoppsettIFRSdatadef31958"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704.orid": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704.orid",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31704",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EgenkapitalAksjekapitalEidUtenlandskForetak-datadef-31704/properties/orid",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704.value": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704.value",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704",
      "TypeName": "BelopHeltall15repformat37",
      "Name": "value",
      "DataBindingName": "opplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.egenkapitalAksjekapitalEidUtenlandskForetakdatadef31704.value",
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "15",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "31704.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EgenkapitalAksjekapitalEidUtenlandskForetak-datadef-31704/properties/value",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704.value : [1..1] BelopHeltall15repformat37"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "TypeName": "EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704",
      "Name": "EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31704.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "EgenkapitalAksjekapitalEidUtenlandskForetak-datadef-31704",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958/properties/EgenkapitalAksjekapitalEidUtenlandskForetak-datadef-31704",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704 : [0..1] EgenkapitalAksjekapitalEidUtenlandskForetakdatadef31704"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705.orid": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705.orid",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31705",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EgenkapitalAnnenInnskuddEidUtenlandskForetak-datadef-31705/properties/orid",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705.value": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705.value",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705",
      "TypeName": "BelopHeltall15repformat37",
      "Name": "value",
      "DataBindingName": "opplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.egenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705.value",
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "15",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "31705.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EgenkapitalAnnenInnskuddEidUtenlandskForetak-datadef-31705/properties/value",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705.value : [1..1] BelopHeltall15repformat37"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "TypeName": "EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705",
      "Name": "EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31705.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "EgenkapitalAnnenInnskuddEidUtenlandskForetak-datadef-31705",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958/properties/EgenkapitalAnnenInnskuddEidUtenlandskForetak-datadef-31705",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705 : [0..1] EgenkapitalAnnenInnskuddEidUtenlandskForetakdatadef31705"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706.orid": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706.orid",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalOpptjentEidUtenlandskForetakdatadef31706/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31706",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EgenkapitalOpptjentEidUtenlandskForetak-datadef-31706/properties/orid",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706.value": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706.value",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706",
      "TypeName": "BelopHeltall15repformat37",
      "Name": "value",
      "DataBindingName": "opplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.egenkapitalOpptjentEidUtenlandskForetakdatadef31706.value",
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalOpptjentEidUtenlandskForetakdatadef31706/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "15",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "31706.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706.Label",
        "PlaceHolder": "31706.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EgenkapitalOpptjentEidUtenlandskForetak-datadef-31706/properties/value",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706.value : [1..1] BelopHeltall15repformat37"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "TypeName": "EgenkapitalOpptjentEidUtenlandskForetakdatadef31706",
      "Name": "EgenkapitalOpptjentEidUtenlandskForetakdatadef31706",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalOpptjentEidUtenlandskForetakdatadef31706",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31706.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706.Label",
        "PlaceHolder": "31706.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "EgenkapitalOpptjentEidUtenlandskForetak-datadef-31706",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958/properties/EgenkapitalOpptjentEidUtenlandskForetak-datadef-31706",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalOpptjentEidUtenlandskForetakdatadef31706 : [0..1] EgenkapitalOpptjentEidUtenlandskForetakdatadef31706"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707.orid": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707.orid",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalTotalEidUtenlandskForetakdatadef31707/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31707",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EgenkapitalTotalEidUtenlandskForetak-datadef-31707/properties/orid",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707.value": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707.value",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707",
      "TypeName": "BelopHeltall15repformat37",
      "Name": "value",
      "DataBindingName": "opplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.egenkapitalTotalEidUtenlandskForetakdatadef31707.value",
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalTotalEidUtenlandskForetakdatadef31707/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "15",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "31707.EgenkapitalTotalEidUtenlandskForetakdatadef31707.Label",
        "PlaceHolder": "31707.EgenkapitalTotalEidUtenlandskForetakdatadef31707.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EgenkapitalTotalEidUtenlandskForetak-datadef-31707/properties/value",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707.value : [1..1] BelopHeltall15repformat37"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "TypeName": "EgenkapitalTotalEidUtenlandskForetakdatadef31707",
      "Name": "EgenkapitalTotalEidUtenlandskForetakdatadef31707",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/EgenkapitalTotalEidUtenlandskForetakdatadef31707",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31707.EgenkapitalTotalEidUtenlandskForetakdatadef31707.Label",
        "PlaceHolder": "31707.EgenkapitalTotalEidUtenlandskForetakdatadef31707.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "EgenkapitalTotalEidUtenlandskForetak-datadef-31707",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958/properties/EgenkapitalTotalEidUtenlandskForetak-datadef-31707",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.EgenkapitalTotalEidUtenlandskForetakdatadef31707 : [1..1] EgenkapitalTotalEidUtenlandskForetakdatadef31707"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708.orid": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708.orid",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/UtbytteAvsattEidUtenlandskForetakdatadef31708/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31708",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/UtbytteAvsattEidUtenlandskForetak-datadef-31708/properties/orid",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708.value": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708.value",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708",
      "TypeName": "BelopHeltall15repformat37",
      "Name": "value",
      "DataBindingName": "opplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.utbytteAvsattEidUtenlandskForetakdatadef31708.value",
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/UtbytteAvsattEidUtenlandskForetakdatadef31708/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "15",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "31708.UtbytteAvsattEidUtenlandskForetakdatadef31708.Label",
        "PlaceHolder": "31708.UtbytteAvsattEidUtenlandskForetakdatadef31708.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/UtbytteAvsattEidUtenlandskForetak-datadef-31708/properties/value",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708.value : [1..1] BelopHeltall15repformat37"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "TypeName": "UtbytteAvsattEidUtenlandskForetakdatadef31708",
      "Name": "UtbytteAvsattEidUtenlandskForetakdatadef31708",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/UtbytteAvsattEidUtenlandskForetakdatadef31708",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31708.UtbytteAvsattEidUtenlandskForetakdatadef31708.Label",
        "PlaceHolder": "31708.UtbytteAvsattEidUtenlandskForetakdatadef31708.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "UtbytteAvsattEidUtenlandskForetak-datadef-31708",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958/properties/UtbytteAvsattEidUtenlandskForetak-datadef-31708",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteAvsattEidUtenlandskForetakdatadef31708 : [0..1] UtbytteAvsattEidUtenlandskForetakdatadef31708"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709.orid": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709.orid",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/ArsresultatEtterSkattEidUtenlandskForetakdatadef31709/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31709",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ArsresultatEtterSkattEidUtenlandskForetak-datadef-31709/properties/orid",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709.value": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709.value",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709",
      "TypeName": "BelopHeltall15repformat37",
      "Name": "value",
      "DataBindingName": "opplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.arsresultatEtterSkattEidUtenlandskForetakdatadef31709.value",
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/ArsresultatEtterSkattEidUtenlandskForetakdatadef31709/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "15",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "31709.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/ArsresultatEtterSkattEidUtenlandskForetak-datadef-31709/properties/value",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709.value : [1..1] BelopHeltall15repformat37"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "TypeName": "ArsresultatEtterSkattEidUtenlandskForetakdatadef31709",
      "Name": "ArsresultatEtterSkattEidUtenlandskForetakdatadef31709",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/ArsresultatEtterSkattEidUtenlandskForetakdatadef31709",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31709.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "ArsresultatEtterSkattEidUtenlandskForetak-datadef-31709",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958/properties/ArsresultatEtterSkattEidUtenlandskForetak-datadef-31709",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.ArsresultatEtterSkattEidUtenlandskForetakdatadef31709 : [1..1] ArsresultatEtterSkattEidUtenlandskForetakdatadef31709"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710.orid": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710.orid",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/UtbytteUtbetaltEidUtenlandskForetakdatadef31710/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31710",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/UtbytteUtbetaltEidUtenlandskForetak-datadef-31710/properties/orid",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710.orid : [1..1] Integer"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710.value": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710.value",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710",
      "TypeName": "BelopHeltall15repformat37",
      "Name": "value",
      "DataBindingName": "opplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.utbytteUtbetaltEidUtenlandskForetakdatadef31710.value",
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/UtbytteUtbetaltEidUtenlandskForetakdatadef31710/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "15",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "31710.UtbytteUtbetaltEidUtenlandskForetakdatadef31710.Label",
        "PlaceHolder": "31710.UtbytteUtbetaltEidUtenlandskForetakdatadef31710.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/UtbytteUtbetaltEidUtenlandskForetak-datadef-31710/properties/value",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710.value : [1..1] BelopHeltall15repformat37"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710",
      "ParentElement": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "TypeName": "UtbytteUtbetaltEidUtenlandskForetakdatadef31710",
      "Name": "UtbytteUtbetaltEidUtenlandskForetakdatadef31710",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958/UtbytteUtbetaltEidUtenlandskForetakdatadef31710",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31710.UtbytteUtbetaltEidUtenlandskForetakdatadef31710.Label",
        "PlaceHolder": "31710.UtbytteUtbetaltEidUtenlandskForetakdatadef31710.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "UtbytteUtbetaltEidUtenlandskForetak-datadef-31710",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958/properties/UtbytteUtbetaltEidUtenlandskForetak-datadef-31710",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958.UtbytteUtbetaltEidUtenlandskForetakdatadef31710 : [1..1] UtbytteUtbetaltEidUtenlandskForetakdatadef31710"
    },
    "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958": {
      "ID": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "ParentElement": "Skjema",
      "TypeName": "OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "Name": "OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "DataBindingName": null,
      "XPath": "/Skjema/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnska-grp-7958",
      "DisplayString": "Skjema.OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958 : [0..1] OpplysningerFraDetUtenlandskeForetaketsBalanseOgResultatregnskagrp7958"
    },
    "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.gruppeid": {
      "ID": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.gruppeid",
      "ParentElement": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/AndreOpplysningerFraDetUtenlandskeForetaketgrp7959/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7959",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/AndreOpplysningerFraDetUtenlandskeForetaket-grp-7959/properties/gruppeid",
      "DisplayString": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.gruppeid : [1..1] Integer"
    },
    "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711.orid": {
      "ID": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711.orid",
      "ParentElement": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/AndreOpplysningerFraDetUtenlandskeForetaketgrp7959/OmsetningEidUtenlandskForetakdatadef31711/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "31711",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OmsetningEidUtenlandskForetak-datadef-31711/properties/orid",
      "DisplayString": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711.orid : [1..1] Integer"
    },
    "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711.value": {
      "ID": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711.value",
      "ParentElement": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711",
      "TypeName": "BelopHeltall15repformat37",
      "Name": "value",
      "DataBindingName": "andreOpplysningerFraDetUtenlandskeForetaketgrp7959.omsetningEidUtenlandskForetakdatadef31711.value",
      "XPath": "/Skjema/AndreOpplysningerFraDetUtenlandskeForetaketgrp7959/OmsetningEidUtenlandskForetakdatadef31711/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "15",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "31711.OmsetningEidUtenlandskForetakdatadef31711.Label",
        "PlaceHolder": "31711.OmsetningEidUtenlandskForetakdatadef31711.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/OmsetningEidUtenlandskForetak-datadef-31711/properties/value",
      "DisplayString": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711.value : [1..1] BelopHeltall15repformat37"
    },
    "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711": {
      "ID": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711",
      "ParentElement": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959",
      "TypeName": "OmsetningEidUtenlandskForetakdatadef31711",
      "Name": "OmsetningEidUtenlandskForetakdatadef31711",
      "DataBindingName": null,
      "XPath": "/Skjema/AndreOpplysningerFraDetUtenlandskeForetaketgrp7959/OmsetningEidUtenlandskForetakdatadef31711",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "31711.OmsetningEidUtenlandskForetakdatadef31711.Label",
        "PlaceHolder": "31711.OmsetningEidUtenlandskForetakdatadef31711.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "OmsetningEidUtenlandskForetak-datadef-31711",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/AndreOpplysningerFraDetUtenlandskeForetaket-grp-7959/properties/OmsetningEidUtenlandskForetak-datadef-31711",
      "DisplayString": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.OmsetningEidUtenlandskForetakdatadef31711 : [0..1] OmsetningEidUtenlandskForetakdatadef31711"
    },
    "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30.orid": {
      "ID": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30.orid",
      "ParentElement": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/AndreOpplysningerFraDetUtenlandskeForetaketgrp7959/Sysselsattedatadef30/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "30",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Sysselsatte-datadef-30/properties/orid",
      "DisplayString": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30.orid : [1..1] Integer"
    },
    "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30.value": {
      "ID": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30.value",
      "ParentElement": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30",
      "TypeName": "Heltall5repformat64",
      "Name": "value",
      "DataBindingName": "andreOpplysningerFraDetUtenlandskeForetaketgrp7959.sysselsattedatadef30.value",
      "XPath": "/Skjema/AndreOpplysningerFraDetUtenlandskeForetaketgrp7959/Sysselsattedatadef30/value",
      "Restrictions": {
        "totalDigits": {
          "Value": "5",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "Integer",
      "Texts": {
        "Label": "30.Sysselsattedatadef30.Label",
        "PlaceHolder": "30.Sysselsattedatadef30.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Sysselsatte-datadef-30/properties/value",
      "DisplayString": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30.value : [1..1] Heltall5repformat64"
    },
    "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30": {
      "ID": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30",
      "ParentElement": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959",
      "TypeName": "Sysselsattedatadef30",
      "Name": "Sysselsattedatadef30",
      "DataBindingName": null,
      "XPath": "/Skjema/AndreOpplysningerFraDetUtenlandskeForetaketgrp7959/Sysselsattedatadef30",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "30.Sysselsattedatadef30.Label",
        "PlaceHolder": "30.Sysselsattedatadef30.PlaceHolder"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "Sysselsatte-datadef-30",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/AndreOpplysningerFraDetUtenlandskeForetaket-grp-7959/properties/Sysselsatte-datadef-30",
      "DisplayString": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959.Sysselsattedatadef30 : [0..1] Sysselsattedatadef30"
    },
    "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959": {
      "ID": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959",
      "ParentElement": "Skjema",
      "TypeName": "AndreOpplysningerFraDetUtenlandskeForetaketgrp7959",
      "Name": "AndreOpplysningerFraDetUtenlandskeForetaketgrp7959",
      "DataBindingName": null,
      "XPath": "/Skjema/AndreOpplysningerFraDetUtenlandskeForetaketgrp7959",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "AndreOpplysningerFraDetUtenlandskeForetaket-grp-7959",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/AndreOpplysningerFraDetUtenlandskeForetaket-grp-7959",
      "DisplayString": "Skjema.AndreOpplysningerFraDetUtenlandskeForetaketgrp7959 : [0..1] AndreOpplysningerFraDetUtenlandskeForetaketgrp7959"
    },
    "Skjema.EventuelleKommentarergrp7960.gruppeid": {
      "ID": "Skjema.EventuelleKommentarergrp7960.gruppeid",
      "ParentElement": "Skjema.EventuelleKommentarergrp7960",
      "TypeName": "Integer",
      "Name": "gruppeid",
      "DataBindingName": null,
      "XPath": "/Skjema/EventuelleKommentarergrp7960/gruppeid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "gruppeid",
      "IsTagContent": false,
      "FixedValue": "7960",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EventuelleKommentarer-grp-7960/properties/gruppeid",
      "DisplayString": "Skjema.EventuelleKommentarergrp7960.gruppeid : [1..1] Integer"
    },
    "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683.orid": {
      "ID": "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683.orid",
      "ParentElement": "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683",
      "TypeName": "Integer",
      "Name": "orid",
      "DataBindingName": null,
      "XPath": "/Skjema/EventuelleKommentarergrp7960/Tilleggsopplysningerdatadef7683/orid",
      "Restrictions": {
        "minimum": {
          "Value": "0",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Attribute",
      "XsdValueType": "PositiveInteger",
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "orid",
      "IsTagContent": false,
      "FixedValue": "7683",
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Tilleggsopplysninger-datadef-7683/properties/orid",
      "DisplayString": "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683.orid : [1..1] Integer"
    },
    "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683.value": {
      "ID": "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683.value",
      "ParentElement": "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683",
      "TypeName": "Tekst3500repformat17",
      "Name": "value",
      "DataBindingName": "eventuelleKommentarergrp7960.tilleggsopplysningerdatadef7683.value",
      "XPath": "/Skjema/EventuelleKommentarergrp7960/Tilleggsopplysningerdatadef7683/value",
      "Restrictions": {
        "minLength": {
          "Value": "1",
          "ErrortText": null
        },
        "maxLength": {
          "Value": "3500",
          "ErrortText": null
        }
      },
      "Choices": null,
      "Type": "Field",
      "XsdValueType": "String",
      "Texts": {
        "Label": "7683.Tilleggsopplysningerdatadef7683.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 1,
      "XName": "value",
      "IsTagContent": true,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Tilleggsopplysninger-datadef-7683/properties/value",
      "DisplayString": "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683.value : [1..1] Tekst3500repformat17"
    },
    "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683": {
      "ID": "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683",
      "ParentElement": "Skjema.EventuelleKommentarergrp7960",
      "TypeName": "Tilleggsopplysningerdatadef7683",
      "Name": "Tilleggsopplysningerdatadef7683",
      "DataBindingName": null,
      "XPath": "/Skjema/EventuelleKommentarergrp7960/Tilleggsopplysningerdatadef7683",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "7683.Tilleggsopplysningerdatadef7683.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "Tilleggsopplysninger-datadef-7683",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/EventuelleKommentarer-grp-7960/properties/Tilleggsopplysninger-datadef-7683",
      "DisplayString": "Skjema.EventuelleKommentarergrp7960.Tilleggsopplysningerdatadef7683 : [0..1] Tilleggsopplysningerdatadef7683"
    },
    "Skjema.EventuelleKommentarergrp7960": {
      "ID": "Skjema.EventuelleKommentarergrp7960",
      "ParentElement": "Skjema",
      "TypeName": "EventuelleKommentarergrp7960",
      "Name": "EventuelleKommentarergrp7960",
      "DataBindingName": null,
      "XPath": "/Skjema/EventuelleKommentarergrp7960",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {},
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "EventuelleKommentarer-grp-7960",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/definitions/Skjema/properties/EventuelleKommentarer-grp-7960",
      "DisplayString": "Skjema.EventuelleKommentarergrp7960 : [0..1] EventuelleKommentarergrp7960"
    },
    "Skjema": {
      "ID": "Skjema",
      "ParentElement": null,
      "TypeName": "Skjema",
      "Name": "Skjema",
      "DataBindingName": null,
      "XPath": "/Skjema",
      "Restrictions": {},
      "Choices": null,
      "Type": "Group",
      "XsdValueType": null,
      "Texts": {
        "Label": "Skjema.Label"
      },
      "CustomProperties": {},
      "MaxOccurs": 1,
      "MinOccurs": 0,
      "XName": "Skjema",
      "IsTagContent": false,
      "FixedValue": null,
      "IsReadOnly": false,
      "XmlSchemaXPath": null,
      "JsonSchemaPointer": "#/properties/Skjema",
      "DisplayString": "Skjema : [0..1] Skjema"
    }
  }
}