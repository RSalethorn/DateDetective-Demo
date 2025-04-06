import { useState } from "react";
import "../styles/App.css";
import "../styles/docs/Docs.css";
import CodeBlock from "../docs/CodeBlock.jsx";

function Docs() {
  return (
    <div className="body">
      <div className="docs_container">
        <h1>Documentation</h1>
        <p>
          DateDetective is a Python package that takes a machine learning
          approach to identifying the format of date strings. This tool is
          useful for many applications like web scraping where the amount of
          formats used to represent dates is many and there is no need for 100%
          accuracy.
        </p>
        <h2>Compatible date formats</h2>
        <p>
          DateDetective's model is trained to predict what combination of Python
          datetime module format codes would make up a given string
          representation of a date.
        </p>
        <p>
          It's important to remember that although DateFinder is usually
          accurate it sometimes makes mistakes.
        </p>
        <p>Currently the model can identify the following format codes:</p>
        <table>
          <tr>
            <th>Format Code</th>
            <th>Description</th>
            <th>Examples</th>
          </tr>
          <tr>
            <td>%d</td>
            <td>Day of the month as zero-padded decimal number</td>
            <td>01, 02, ..., 30, 31</td>
          </tr>
          <tr>
            <td>%B</td>
            <td>Month as full text name</td>
            <td>January, February, March, ..., December</td>
          </tr>
          <tr>
            <td>%b</td>
            <td>Month as abrieviated text name</td>
            <td>Jan, Feb, Mar, ..., Dec</td>
          </tr>
          <tr>
            <td>%m</td>
            <td>Month as a zero-padded decimal number</td>
            <td>01, 02, 03, ..., 12</td>
          </tr>
          <tr>
            <td>%Y</td>
            <td>Year with century as decimal number</td>
            <td>1832, 1996, 2002, 2024</td>
          </tr>
          <tr>
            <td>%H</td>
            <td>Hours as zero-padded decimal number (24 hour clock)</td>
            <td>00, 01, 02, ..., 22, 23, 24</td>
          </tr>
          <tr>
            <td>%I</td>
            <td>Hours as zero-padded decimal number (12 hour clock)</td>
            <td>01, 02, 03, ..., 10, 11, 12</td>
          </tr>
          <tr>
            <td>%M</td>
            <td>Minutes as zero-padded decimal number</td>
            <td>00, 01, 02, ..., 58, 59, 60</td>
          </tr>
          <tr>
            <td>%S</td>
            <td>Seconds as zero-padded decimal number</td>
            <td>00, 01, 02, ..., 58, 59, 60</td>
          </tr>
          <tr>
            <td>%f</td>
            <td>Microsecond as decimal number, zero-padded to six digits</td>
            <td>000000, 000001, ..., 999999</td>
          </tr>
          <tr>
            <td>%p</td>
            <td>AM or PM</td>
            <td>AM, PM</td>
          </tr>
          <tr>
            <td>%Z</td>
            <td>Time zone name as text</td>
            <td>UTC, GMT, EAT, EDT</td>
          </tr>
          <tr>
            <td>%z</td>
            <td>Time zone as UTC offset decimal number</td>
            <td>+0000, -1200, +1000</td>
          </tr>
        </table>
        <h2>Installation</h2>
        <p>
          Firstly you will need to ensure that the version of PyTorch that is
          best for you is installed in the Python environment you are using. If
          possible use CUDA as this should increase date detection speed.
          Currently PyTorch's website has an install command finder at:
          <a href="https://pytorch.org/get-started/locally/">
            https://pytorch.org/get-started/locally/
          </a>
        </p>
        <p>After PyTorch is installed you can install DateDetective via Pip.</p>
        <CodeBlock code={["pip install DateDetective"]} />
        <h2>Usage</h2>
        <h3>Import and Initialise</h3>
        <CodeBlock
          code={[
            "from datedetective import DateDetective",
            "dd = DateDetective()",
          ]}
        />
        <p>
          By default DateDetective will use CUDA cores on your GPU (if
          available) for some of the calculations. If you do not want to use
          CUDA then initialise DateFinder like this:
        </p>
        <CodeBlock code={["dd = DateDetective(useCuda=False)"]} />
        <h3>Generate datetime module format string from date string</h3>
        <CodeBlock
          code={[
            '>>>dd.get_format("30/12/2023 12:52:23")',
            "'%d/%m/%Y %H:%M:%S'",
          ]}
        />
        <h3>Create a datetime object string from date string</h3>
        <CodeBlock
          code={[
            '>>>dd.get_datetime("30/12/2023 12:52:23")',
            "datetime.datetime(2023, 12, 30, 12, 52, 23)",
          ]}
        />
        <h3>
          Generate datetime module format string from list of date strings with
          same format
        </h3>
        <p>
          DateDetective is more accurate if you have multiple date strings
          written in the same format, the following example benefits from this
          increased accuracy. Grouping date strings for detection helps with
          things like identifying whether date or month comes first.
        </p>
        <CodeBlock
          code={[
            '>>>date_str_list = ["31/12/1997", "20/01/2015", "01/01/2003", "01/12/2010", "23/08/1954", "15/05/2016", "30/03/2022", "11/06/2007"]',
            ">>>dd.get_list_format(date_str_list)",
            '"%d/%m/%Y"',
          ]}
        />
        <h3>Convert all date strings in a list to datetime objects</h3>
        <CodeBlock
          code={[
            '>>>date_str_list = ["31/12/1997", "20/01/2015", "01/01/2003", "23/08/1954", "30/03/2022"]',
            ">>>dd.get_list_datetime(date_str_list)",
            "[datetime.datetime(1997, 12, 31, 0, 0, 0), datetime.datetime(2015, 1, 20, 0, 0, 0), datetime.datetime(2003, 1, 1, 0, 0, 0), datetime.datetime(1954, 8, 23, 0, 0, 0), datetime.datetime(2022, 3, 30, 0, 0, 0)]",
          ]}
        />
        <h3>
          Generate format of date strings that are contained in a list of
          dictionaries
        </h3>
        <CodeBlock
          code={[
            'dict_list = [{"name": "Alison", "date_of_birth": "31/12/1997"},',
            '{"name": "Rory", "date_of_birth": "20/01/2015"},',
            '{"name": "Charlotte", "date_of_birth": "01/01/2003"},',
            '{"name": "Jo", "city": "London"}',
            '{"name": "Geoff", "date_of_birth": "23/08/1954"},',
            '{"name": "Rob", "date_of_birth": "30/03/2022"}]',
            '>>>dd.get_dict_list_format(dict_list, "date_of_birth")',
            '"%d/%m/%Y"',
          ]}
        />
        <p>
          When using a function that takes lists of dictionaries you must
          specify the key for each dictionary that stores the date strings that
          DateDetective will predict the format for.
        </p>
        <p>
          As seen in the example above and in following example, not all
          dictionaries in the list provided need to contain the date string key
          (i.e. "Jo"). DateDetective will skip these dictionaries.
        </p>
        <h3>
          Convert date strings in a list of dictionaries to datetime objects
        </h3>
        <CodeBlock
          code={[
            'dict_list = [{"name": "Alison", "date_of_birth": "31/12/1997"},',
            '{"name": "Rory", "date_of_birth": "20/01/2015"},',
            '{"name": "Charlotte", "date_of_birth": "01/01/2003"}]',
            '>>>dd.get_dict_list_datetime(dict_list, "date_of_birth")',
            '[{"name": "Alison", "date_of_birth": datetime.datetime(1997, 12, 31, 0, 0, 0)},',
            '{"name": "Rory", "date_of_birth": datetime.datetime(2015, 1, 20, 0, 0, 0)},',
            '{"name": "Charlotte", "date_of_birth": datetime.datetime(2003, 1, 1, 0, 0, 0)}]',
          ]}
        />
        <p>
          If you set retain_date_str to True then the returned list of
          dictionaries will also contain the original date strings. They will be
          stored under the date key with "_original" concatenated on the end.
        </p>
        <CodeBlock
          code={[
            'dict_list = [{"name": "Alison", "date_of_birth": "31/12/1997"},',
            ". . .",
            '{"name": "Rob", "date_of_birth": "30/03/2022"}]',
            '>>>dd.get_dict_list_datetime(dict_list, "date_of_birth", retain_date_str=True)',
            '[{"name": "Alison", "date_of_birth": datetime.datetime(1997, 12, 31, 0, 0, 0), "date_of_birth_original": "31/12/1997"},',
            ". . .",
            '{"name": "Rob", "date_of_birth": datetime.datetime(2022, 3, 30, 0, 0, 0), "date_of_birth_original": "30/03/2022"}]',
          ]}
        />
      </div>
    </div>
  );
}

export default Docs;
