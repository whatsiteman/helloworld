import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getSettings } from '../service/DataService'

function SEO({ className, title, description, lang, meta }) {
    const { allSetting } = useStaticQuery(graphql`
    query {
      allSetting {
        edges {
          node {
            key
            value
          }
        }
      }
    }
  `);

  const [settings, setSettings] = useState([]);
  useEffect(() => {
    getSettings(allSetting)
      .then((resultData) => {
        setSettings(resultData);
      });
  }, [allSetting]);

  return (
    <Helmet
      htmlAttributes={{
        lang,
        class: className
      }}
      title={title}
      titleTemplate={`%s | ${settings["meta-title"] || settings["title"]}`}
      meta={[
        {
          name: `description`,
          content: description || settings["meta-description"] || settings["description"],
        },
        {
          property: `og:title`,
          content: settings["og-facebook-title"] || settings["title"],
        },
        {
          property: `og:description`,
          content: settings["og-facebook-description"] || settings["description"],
        },
        {
          property: `og:type`,
          content: `website`,
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  author: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO