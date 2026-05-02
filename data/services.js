const serviceCatalog = [
  { id: 'whole-home-planning', sortOrder: 0, isHidden: false, showOnHome: true, images: ['/images/services/whole-home.png'] },
  { id: 'remote-planning',     sortOrder: 1, isHidden: false, showOnHome: true, images: ['/images/services/remote-planning.png'] },
  { id: 'installation',        sortOrder: 2, isHidden: false, showOnHome: true, images: ['/images/services/installation.png'] },
  { id: 'troubleshooting',     sortOrder: 3, isHidden: false, showOnHome: true, images: ['/images/services/troubleshooting.png'] },
  { id: 'automation-planning', sortOrder: 4, isHidden: false, showOnHome: true, images: ['/images/services/automation.png'] },
  { id: 'network-and-hub-setup', sortOrder: 5, isHidden: true, showOnHome: true, images: ['/images/services/installation-1.jpg'] },
];

const compareServices = (left, right) => {
  if (left.sortOrder !== right.sortOrder) {
    return left.sortOrder - right.sortOrder;
  }

  return left._sourceIndex - right._sourceIndex;
};

const normalizeService = (service, index) => ({
  ...service,
  sortOrder: service.sortOrder ?? index,
  isHidden: service.isHidden ?? false,
  _sourceIndex: index,
});

const stripInternalFields = (service) => {
  const normalizedService = { ...service };
  delete normalizedService._sourceIndex;
  return normalizedService;
};

const managedServices = serviceCatalog
  .map(normalizeService)
  .filter((service) => service.isHidden !== true)
  .sort(compareServices)
  .map(stripInternalFields);

export const services = managedServices;

export const homeServices = managedServices.filter((service) => service.showOnHome !== false);