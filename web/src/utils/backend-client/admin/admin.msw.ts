/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Common Fate
 * Common Fate API
 * OpenAPI spec version: 1.0
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'
import {
  RequestAccessGroupStatus,
  RequestAccessGroupTargetStatus,
  RequestAccessGroupApprovalMethod,
  RequestStatus,
  IdpStatus,
  LogLevel
} from '.././types'

export const getAdminGetDeploymentVersionMock = () => ({version: faker.random.word()})

export const getAdminListAccessRulesMock = () => ({accessRules: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), name: faker.random.word(), description: faker.random.word(), targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({targetGroup: {id: faker.random.word(), schema: {
        'clgugkb4u0000bg459g268fib': {id: faker.random.word(), title: faker.random.word(), description: faker.helpers.arrayElement([faker.random.word(), undefined])}
      }, from: {publisher: faker.random.word(), name: faker.random.word(), version: faker.random.word(), kind: faker.random.word()}, icon: faker.random.word(), createdAt: faker.helpers.arrayElement([faker.random.word(), undefined]), updatedAt: faker.helpers.arrayElement([faker.random.word(), undefined])}, fieldFilterExpessions: {}})), timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}, groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), approval: {users: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))}, metadata: {createdAt: faker.random.word(), createdBy: faker.random.word(), updatedAt: faker.random.word(), updatedBy: faker.random.word(), updateMessage: faker.helpers.arrayElement([faker.random.word(), undefined])}, priority: faker.datatype.number({min: 0, max: undefined})})), next: faker.helpers.arrayElement([faker.random.word(), null])})

export const getAdminCreateAccessRuleMock = () => ({id: faker.random.word(), name: faker.random.word(), description: faker.random.word(), targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({targetGroup: {id: faker.random.word(), schema: {
        'clgugkb4v0001bg45gqtlhapl': {id: faker.random.word(), title: faker.random.word(), description: faker.helpers.arrayElement([faker.random.word(), undefined])}
      }, from: {publisher: faker.random.word(), name: faker.random.word(), version: faker.random.word(), kind: faker.random.word()}, icon: faker.random.word(), createdAt: faker.helpers.arrayElement([faker.random.word(), undefined]), updatedAt: faker.helpers.arrayElement([faker.random.word(), undefined])}, fieldFilterExpessions: {}})), timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}, groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), approval: {users: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))}, metadata: {createdAt: faker.random.word(), createdBy: faker.random.word(), updatedAt: faker.random.word(), updatedBy: faker.random.word(), updateMessage: faker.helpers.arrayElement([faker.random.word(), undefined])}, priority: faker.datatype.number({min: 0, max: undefined})})

export const getAdminGetAccessRuleMock = () => ({id: faker.random.word(), name: faker.random.word(), description: faker.random.word(), targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({targetGroup: {id: faker.random.word(), schema: {
        'clgugkb540002bg45eb4pgf45': {id: faker.random.word(), title: faker.random.word(), description: faker.helpers.arrayElement([faker.random.word(), undefined])}
      }, from: {publisher: faker.random.word(), name: faker.random.word(), version: faker.random.word(), kind: faker.random.word()}, icon: faker.random.word(), createdAt: faker.helpers.arrayElement([faker.random.word(), undefined]), updatedAt: faker.helpers.arrayElement([faker.random.word(), undefined])}, fieldFilterExpessions: {}})), timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}, groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), approval: {users: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))}, metadata: {createdAt: faker.random.word(), createdBy: faker.random.word(), updatedAt: faker.random.word(), updatedBy: faker.random.word(), updateMessage: faker.helpers.arrayElement([faker.random.word(), undefined])}, priority: faker.datatype.number({min: 0, max: undefined})})

export const getAdminUpdateAccessRuleMock = () => ({id: faker.random.word(), name: faker.random.word(), description: faker.random.word(), targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({targetGroup: {id: faker.random.word(), schema: {
        'clgugkb550003bg451k6j27c5': {id: faker.random.word(), title: faker.random.word(), description: faker.helpers.arrayElement([faker.random.word(), undefined])}
      }, from: {publisher: faker.random.word(), name: faker.random.word(), version: faker.random.word(), kind: faker.random.word()}, icon: faker.random.word(), createdAt: faker.helpers.arrayElement([faker.random.word(), undefined]), updatedAt: faker.helpers.arrayElement([faker.random.word(), undefined])}, fieldFilterExpessions: {}})), timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}, groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), approval: {users: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))}, metadata: {createdAt: faker.random.word(), createdBy: faker.random.word(), updatedAt: faker.random.word(), updatedBy: faker.random.word(), updateMessage: faker.helpers.arrayElement([faker.random.word(), undefined])}, priority: faker.datatype.number({min: 0, max: undefined})})

export const getAdminListRequestsMock = () => ({requests: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), purpose: {reason: faker.helpers.arrayElement([faker.random.word(), undefined])}, accessGroups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestId: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestAccessGroupStatus)), time: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, overrideTiming: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, updatedAt: faker.random.word(), createdAt: faker.random.word(), targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestId: faker.random.word(), accessGroupId: faker.random.word(), targetGroupId: faker.random.word(), targetGroupFrom: {publisher: faker.random.word(), name: faker.random.word(), version: faker.random.word(), kind: faker.random.word()}, fields: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), fieldTitle: faker.random.word(), fieldDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), valueLabel: faker.random.word(), valueDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), value: faker.random.word()})), status: faker.helpers.arrayElement(Object.values(RequestAccessGroupTargetStatus))})), approvalMethod: faker.helpers.arrayElement([faker.helpers.arrayElement(Object.values(RequestAccessGroupApprovalMethod)), undefined])})), requestedBy: faker.random.word(), requestedAt: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestStatus))})), next: faker.helpers.arrayElement([faker.random.word(), null])})

export const getAdminUpdateUserMock = () => ({id: faker.random.word(), email: faker.random.word(), firstName: faker.random.word(), picture: faker.random.word(), status: faker.helpers.arrayElement(Object.values(IdpStatus)), lastName: faker.random.word(), updatedAt: faker.random.word(), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))})

export const getAdminListUsersMock = () => ({users: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), email: faker.random.word(), firstName: faker.random.word(), picture: faker.random.word(), status: faker.helpers.arrayElement(Object.values(IdpStatus)), lastName: faker.random.word(), updatedAt: faker.random.word(), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))})), next: faker.helpers.arrayElement([faker.random.word(), null])})

export const getAdminCreateUserMock = () => ({id: faker.random.word(), email: faker.random.word(), firstName: faker.random.word(), picture: faker.random.word(), status: faker.helpers.arrayElement(Object.values(IdpStatus)), lastName: faker.random.word(), updatedAt: faker.random.word(), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))})

export const getAdminListGroupsMock = () => ({groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({name: faker.random.word(), description: faker.random.word(), id: faker.random.word(), memberCount: faker.datatype.number({min: undefined, max: undefined}), members: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), source: faker.random.word()})), next: faker.helpers.arrayElement([faker.random.word(), null])})

export const getAdminCreateGroupMock = () => ({name: faker.random.word(), description: faker.random.word(), id: faker.random.word(), memberCount: faker.datatype.number({min: undefined, max: undefined}), members: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), source: faker.random.word()})

export const getAdminGetGroupMock = () => ({name: faker.random.word(), description: faker.random.word(), id: faker.random.word(), memberCount: faker.datatype.number({min: undefined, max: undefined}), members: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), source: faker.random.word()})

export const getAdminUpdateGroupMock = () => ({name: faker.random.word(), description: faker.random.word(), id: faker.random.word(), memberCount: faker.datatype.number({min: undefined, max: undefined}), members: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), source: faker.random.word()})

export const getAdminGetIdentityConfigurationMock = () => ({identityProvider: faker.random.word(), administratorGroupId: faker.random.word()})

export const getAdminGetHandlerMock = () => ({id: faker.random.word(), runtime: faker.random.word(), functionArn: faker.random.word(), awsAccount: faker.random.word(), awsRegion: faker.random.word(), healthy: faker.datatype.boolean(), diagnostics: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({level: faker.helpers.arrayElement(Object.values(LogLevel)), code: faker.random.word(), message: faker.random.word()}))})

export const getAdminDeleteHandlerMock = () => ({})

export const getAdminListHandlersMock = () => ({res: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), runtime: faker.random.word(), functionArn: faker.random.word(), awsAccount: faker.random.word(), awsRegion: faker.random.word(), healthy: faker.datatype.boolean(), diagnostics: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({level: faker.helpers.arrayElement(Object.values(LogLevel)), code: faker.random.word(), message: faker.random.word()}))})), next: faker.random.word()})

export const getAdminRegisterHandlerMock = () => ({id: faker.random.word(), runtime: faker.random.word(), functionArn: faker.random.word(), awsAccount: faker.random.word(), awsRegion: faker.random.word(), healthy: faker.datatype.boolean(), diagnostics: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({level: faker.helpers.arrayElement(Object.values(LogLevel)), code: faker.random.word(), message: faker.random.word()}))})

export const getAdminGetTargetGroupMock = () => ({id: faker.random.word(), schema: {
        'clgugkb650004bg455zbi6uf9': {id: faker.random.word(), title: faker.random.word(), description: faker.helpers.arrayElement([faker.random.word(), undefined])}
      }, from: {publisher: faker.random.word(), name: faker.random.word(), version: faker.random.word(), kind: faker.random.word()}, icon: faker.random.word(), createdAt: faker.helpers.arrayElement([faker.random.word(), undefined]), updatedAt: faker.helpers.arrayElement([faker.random.word(), undefined])})

export const getAdminListTargetGroupsMock = () => ({targetGroups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), schema: {
        'clgugkb690005bg45d76k9xvb': {id: faker.random.word(), title: faker.random.word(), description: faker.helpers.arrayElement([faker.random.word(), undefined])}
      }, from: {publisher: faker.random.word(), name: faker.random.word(), version: faker.random.word(), kind: faker.random.word()}, icon: faker.random.word(), createdAt: faker.helpers.arrayElement([faker.random.word(), undefined]), updatedAt: faker.helpers.arrayElement([faker.random.word(), undefined])}))})

export const getAdminCreateTargetGroupMock = () => ({id: faker.random.word(), schema: {
        'clgugkb690006bg453jujh05b': {id: faker.random.word(), title: faker.random.word(), description: faker.helpers.arrayElement([faker.random.word(), undefined])}
      }, from: {publisher: faker.random.word(), name: faker.random.word(), version: faker.random.word(), kind: faker.random.word()}, icon: faker.random.word(), createdAt: faker.helpers.arrayElement([faker.random.word(), undefined]), updatedAt: faker.helpers.arrayElement([faker.random.word(), undefined])})

export const getAdminCreateTargetGroupLinkMock = () => ({targetGroupId: faker.random.word(), handlerId: faker.random.word(), kind: faker.random.word(), priority: faker.datatype.number({min: undefined, max: undefined}), valid: faker.datatype.boolean(), diagnostics: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({level: faker.helpers.arrayElement(Object.values(LogLevel)), code: faker.random.word(), message: faker.random.word()}))})

export const getAdminMSW = () => [
rest.get('*/api/v1/admin/deployment/version', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminGetDeploymentVersionMock()),
        )
      }),rest.get('*/api/v1/admin/access-rules', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminListAccessRulesMock()),
        )
      }),rest.post('*/api/v1/admin/access-rules', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminCreateAccessRuleMock()),
        )
      }),rest.get('*/api/v1/admin/access-rules/:ruleId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminGetAccessRuleMock()),
        )
      }),rest.put('*/api/v1/admin/access-rules/:ruleId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminUpdateAccessRuleMock()),
        )
      }),rest.get('*/api/v1/admin/requests', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminListRequestsMock()),
        )
      }),rest.post('*/api/v1/admin/users/:userId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminUpdateUserMock()),
        )
      }),rest.get('*/api/v1/admin/users', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminListUsersMock()),
        )
      }),rest.post('*/api/v1/admin/users', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminCreateUserMock()),
        )
      }),rest.get('*/api/v1/admin/groups', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminListGroupsMock()),
        )
      }),rest.post('*/api/v1/admin/groups', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminCreateGroupMock()),
        )
      }),rest.get('*/api/v1/admin/groups/:groupId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminGetGroupMock()),
        )
      }),rest.put('*/api/v1/admin/groups/:groupId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminUpdateGroupMock()),
        )
      }),rest.delete('*/api/v1/admin/groups/:groupId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/v1/admin/identity/sync', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/v1/admin/identity', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminGetIdentityConfigurationMock()),
        )
      }),rest.get('*/api/v1/admin/handlers/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminGetHandlerMock()),
        )
      }),rest.delete('*/api/v1/admin/handlers/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminDeleteHandlerMock()),
        )
      }),rest.get('*/api/v1/admin/handlers', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminListHandlersMock()),
        )
      }),rest.post('*/api/v1/admin/handlers', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminRegisterHandlerMock()),
        )
      }),rest.get('*/api/v1/admin/target-groups/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminGetTargetGroupMock()),
        )
      }),rest.delete('*/api/v1/admin/target-groups/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/v1/admin/target-groups', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminListTargetGroupsMock()),
        )
      }),rest.post('*/api/v1/admin/target-groups', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminCreateTargetGroupMock()),
        )
      }),rest.post('*/api/v1/admin/target-groups/:id/link', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminCreateTargetGroupLinkMock()),
        )
      }),rest.post('*/api/v1/admin/target-groups/:id/unlink', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/v1/admin/healthcheck-handlers', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),]
