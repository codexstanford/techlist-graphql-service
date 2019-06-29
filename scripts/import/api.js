const { prisma } = require('../../generated/prisma-client-js');

export async function createCategory(cat, logger) {
  try {
    const result = await prisma.createOrganizationCategory({ payload: cat });
    console.log(result);
    return { [cat]: result };
  } catch (err) {
    const result = await prisma.organizationCategory({
      payload: cat,
    });
    return { [cat]: result };
  }
}

export async function createBusinessModel(model, logger) {
  try {
    const result = await prisma.createOrganizationBusinessModel({
      payload: model,
    });
    return { [model]: result };
  } catch (err) {
    const result = await prisma.organizationBusinessModel({
      payload: model,
    });
    return { [model]: result };
  }
}

export async function createTargetMarket(model, logger) {
  try {
    const result = await prisma.createOrganizationTargetMarket({
      payload: model,
    });
    return { [model]: result };
  } catch (err) {
    const result = await prisma.organizationTargetMarket({
      payload: model,
    });
    return { [model]: result };
  }
}

export async function createCompany(data, logger) {
  try {
    const result = await prisma.createOrganization(data);
  } catch (err) {
    logger.log({
      level: 'error',
      message: err,
    });
  }
}
