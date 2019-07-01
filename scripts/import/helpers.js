export function conformPropertyNames(rawJson) {
  const result = [];
  for (let index in rawJson) {
    const company = rawJson[index];

    const conformedResult = {
      name: conformCompanyName(company.name, company.founded_date),
      logo: conformCompanyLogo(),
      links: conformCompanyLinks(company),
      metadata: conformCompanyMetaData(company),
      description: company.description,
      location: company.location,
      categories: conformCompanyCategories(company),
      affiliations: conformCompanyAffiliations(company),
      targetMarkets: [{ payload: conformCompanyMarkets(company) }],
      businessModels: [{ payload: conformCompanyBusinessModels(company) }],
    };
    result.push(conformedResult);
  }
  return result;
}

function conformCompanyBusinessModels(company) {
  const type = company.business_model;
  if (!type || typeof type === 'undefined') return 'UNKNOWN';
  const mapCompanyType = (type) => {
    if (type === 'Legal Service Using Tech') {
      return `EXTENDER`;
    } else if (type === 'Legal Tech') {
      return 'DEVELOPER';
    } else {
      return 'UNKNOWN';
    }
  };
}

function conformCompanyMarkets(company) {
  const type = company.target_client;
  if (!type) return 'UNKNOWN';
  if (type === 'Individuals') {
    return `INDIVIDUALS`;
  } else if (type === 'Service Providers') {
    return 'SERVICE_PROVIDERS';
  } else if (type === 'Companies') {
    return 'COMPANIES';
  } else {
    return 'UNKNOWN';
  }
}

function conformCompanyAffiliations(company) {
  const result = [];
  if (company && company.contact_name) {
    const person = {
      name: [
        {
          firstName: company.contact_name.split(' ')[0],
          lastName: company.contact_name.split(' ')[1] || 'UNKNOWN',
          fromDate:
            company.founded_date && company.founded_date !== null
              ? new Date(company.founded_date)
              : new Date(),
        },
      ],
      email: company.contact_email
        ? [
            {
              payload: company.contact_email || 'UNKNOWN',
              isPublic: true,
              isPrimary: true,
              fromDate:
                company.founded_date && company.founded_date !== null
                  ? new Date(company.founded_date)
                  : new Date(),
            },
          ]
        : [],
      metadata: {
        isDraft: true,
        isPublic: true,
        isVerified: false,
        isRejected: false,
        isUnverified: true,
        isApproved: false,
        isPendingReview: true,
      },
    };
    result.push(person);
  }

  return result;
}

function conformCompanyCategories(company) {
  const result = [];
  if (company && company.all_tags) {
    const companyTags = company.all_tags
      .split(',')
      .map((item) =>
        item
          .trim()
          .replace(' ', '_')
          .toUpperCase(),
      )
      .map((item) => (item.startsWith('#') ? item.substr(1) : item))
      .filter((item) => item !== '');
    result.push(...companyTags);
  }
  if (company && company.category) {
    const companyCat = company.category
      .trim()
      .replace(' ', '_')
      .toUpperCase();

    result.push(companyCat);
  }
  return result.map((item) => {
    return item.split(' ')[0].split('_-')[0];
  });
}

function conformCompanyMetaData(company) {
  return {
    isDraft: false,
    isPublic: company.visible === 'true' ? true : false,
    isApproved: company.visible === 'true' ? true : false,
    isPendingReview: company.visible === 'false' ? true : false,
    isRejected: false,
  };
}

function conformURL(url) {
  const [protocol] = url.split('://');
  const isHttps = protocol === 'https';
  const protocols = ['http', 'https'];

  return { isHttps, url: protocols.includes(protocol) ? url : `http://${url}` };
}

function conformCompanyLinks(company) {
  const { main_url, twitter_url, angellist_url, crunchbase_url } = company;
  const links = [];
  if (main_url) {
    const { isHttps, url } = conformURL(main_url);
    const mainUrl = {
      type: 'UrlWebsite',
      isPublic: true,
      payload: url,
      isHttps,
      fromDate: Date.now(),
    };
    links.push(mainUrl);
  }
  if (twitter_url) {
    const { isHttps, url } = conformURL(twitter_url);
    const twitterURL = {
      type: 'UrlTwitter',
      isPublic: true,
      payload: url,
      isHttps,
      fromDate: Date.now(),
    };
    links.push(twitterURL);
  }
  if (angellist_url) {
    const { isHttps, url } = conformURL(angellist_url);
    const angellistURL = {
      type: 'UrlAngellist',
      isPublic: true,
      payload: url,
      isHttps,
      fromDate: Date.now(),
    };
    links.push(angellistURL);
  }
  if (crunchbase_url) {
    const { isHttps, url } = conformURL(crunchbase_url);
    const crunchbaseURL = {
      type: 'UrlCrunchbase',
      isPublic: true,
      payload: url,
      isHttps,
      fromDate: Date.now(),
    };
    links.push(crunchbaseURL);
  }
  return links;
}

function conformCompanyLogo() {
  return [
    {
      payload: 'http://via.placeholder.com/640x360',
      fromDate: Date.now(),
      isPrimary: true,
      isPublic: true,
      isDefault: true,
    },
  ];
}

function conformCompanyName(name, date) {
  return [
    {
      payload: name,
      fromDate: date !== null ? new Date(date) : Date.now(),
    },
  ];
}

const mapCompanyType = (type) => {
  if (type === 'Legal Service Using Tech') {
    return `EXTENDER`;
  } else if (type === 'Legal Tech') {
    return 'DEVELOPER';
  } else {
    return 'UNKNOWN';
  }
};

const parseCompanyTargetMarkets = (type) => {
  if (type === 'Individuals') {
    return `INDIVIDUALS`;
  } else if (type === 'Service Providers') {
    return 'SERVICE_PROVIDERS';
  } else if (type === 'Companies') {
    return 'COMPANIES';
  } else {
    return 'UNKNOWN';
  }
};

// type Organization {
//   id: ID! @unique @id
//   createdAt: DateTime! @createdAt
//   updatedAt: DateTime! @updatedAt
//   name: [OrganizationName!]! @relation(link: TABLE, name: "NameOnOrganization")
//   logo: [OrganizationLogo!]! @relation(link: TABLE, name: "LogoOnOrganization")
//   email: [PartyEmail!]! @relation(link: TABLE, name: "EmailOnOrganization")
//   phone: [PartyPhone!]! @relation(link: TABLE, name: "PhoneOnOrganization")
//   location: [OrganizationLocation!]! @relation(link: TABLE, name: "LocationOnOrganization")
//   links: [OrganizationLink!]!  @relation(link: TABLE, name: "LinkOnOrganization")
//   targetMarkets: [OrganizationTargetMarket!]! @relation(link: TABLE, name: "MarketsOnOrganization")
//   categories: [OrganizationCategory!]! @relation(link: TABLE, name: "CategoryOnOrganization")
//   metadata: OrganizationMetaData! @relation(link: INLINE, name: "MetaDataOnOrganization")
//   affiliation: [PersonOrganizationAffiliation!]! @relation(link: TABLE, name: "AffiliationOnOrganization")
//   context: [OrganizationContext!]!
//   yearFounded: DateTime
//   description: String
//   visible: Boolean
// }
