import { mount } from 'enzyme';
import { Action } from 'history';
import 'jest';
import * as React from 'react';
import * as networking from '../../../../shared/src/utils/networking';
import { CloneServiceComponent } from '../../../src/dashboardServices/cloneService/cloneServices';

describe('>>> components/base/cloneService.tsx', () => {
  let mockServices: any;
  let mockClasses: any;
  let mockLocation: any;
  let mockHistory: any;
  let mockMatch: any;
  let mockLanguage: any;
  let mockResult: any;

  beforeEach(() => {
    mockServices = [
      {
        created_at: '2019-01-10T11:22:42Z',
        description: 'Dette er en beskrivelse',
        full_name: 'MyOrg/MyService',
        owner: {
          full_name: '',
          login: 'MyOrg',
          UserType: 2,
        },
        updated_at: '2019-01-14T11:16:45Z',
        is_cloned_to_local: false,
      },
    ];
    mockClasses = {};
    mockLocation = {
      pathname: 'pathname',
      search: 'search',
      state: {},
      hash: 'hash',
    };
    mockHistory = {
      length: 1,
      action: 'PUSH' as Action,
      location,
      push: () => false,
      replace: () => false,
      go: () => false,
      goBack: () => false,
      goForward: () => false,
      block: () => (null) as any,
      listen: () => (null) as any,
      createHref: () => '',
    };
    mockMatch = {
      params: {
        org: 'MyOrg',
        serviceName: 'MyService',
      },
      isExact: false,
      path: '',
      url: '',
    };
    mockLanguage = { dashboard: {} };
    mockResult = {
      commit: {
        author: {
          name: 'Kari',
        },
      },
    };
  });

  it('+++ should return first service in list', () => {

    const mountedComponent = mount(
      <CloneServiceComponent
        language={mockLanguage}
        services={mockServices}
        classes={mockClasses}
        location={mockLocation}
        history={mockHistory}
        match={mockMatch}
      />,
    );

    const instance = mountedComponent.instance() as CloneServiceComponent;
    const spy = jest.spyOn(instance, 'getCurrentRepositoryInfo');
    const service = instance.getCurrentRepositoryInfo();
    expect(spy).toHaveBeenCalled();
    expect(service).toEqual(mockServices[0]);
  });

  it('+++ should return not return any service', () => {
    mockMatch = {
      params: {
        org: 'OrgNotInList',
        serviceName: 'MyService',
      },
      isExact: false,
      path: '',
      url: '',
    };

    const mountedComponent = mount(
      <CloneServiceComponent
        language={mockLanguage}
        services={mockServices}
        classes={mockClasses}
        location={mockLocation}
        history={mockHistory}
        match={mockMatch}
      />,
    );

    const instance = mountedComponent.instance() as CloneServiceComponent;
    const spy = jest.spyOn(instance, 'getCurrentRepositoryInfo');
    const service = instance.getCurrentRepositoryInfo();
    expect(spy).toHaveBeenCalled();
    expect(service).toEqual(null);
  });

  it('+++ should set last changed by on componentDidMount', () => {
    mockMatch = {
      params: {
        org: 'OrgNotInList',
        serviceName: 'MyService',
      },
      isExact: false,
      path: '',
      url: '',
    };

    const mountedComponent = mount(
      <CloneServiceComponent
        language={mockLanguage}
        services={mockServices}
        classes={mockClasses}
        location={mockLocation}
        history={mockHistory}
        match={mockMatch}
      />,
    );

    const instance = mountedComponent.instance() as CloneServiceComponent;
    const componentDidMountSpy = jest.spyOn(instance, 'componentDidMount');
    const getSpy = jest.spyOn(networking, 'get').mockImplementation(() => Promise.resolve(mockResult));
    instance.componentDidMount();
    return Promise.resolve().then(() => {
      expect(instance._isMounted).toBe(true);
      expect(componentDidMountSpy).toHaveBeenCalled();
      expect(getSpy).toHaveBeenCalled();
      expect(instance.state.lastChangedBy).toBe(mockResult.commit.author.name);
    });
  });

  it('+++ should clone service and redirect user to created service', () => {
    const mountedComponent = mount(
      <CloneServiceComponent
        language={mockLanguage}
        services={mockServices}
        classes={mockClasses}
        location={mockLocation}
        history={mockHistory}
        match={mockMatch}
      />,
    );

    const instance = mountedComponent.instance() as CloneServiceComponent;
    const getSpy = jest.spyOn(networking, 'get').mockImplementation(() => Promise.resolve(mockResult));
    const cloneAndEditServiceSpy = jest.spyOn(instance, 'cloneAndEditService');
    const getCurrentRepositoryInfoSpy = jest.spyOn(instance, 'getCurrentRepositoryInfo');
    instance.componentDidMount();
    // Resolving get in componentDidMount
    return Promise.resolve().then(() => {
      expect(getSpy).toHaveBeenCalled();
      expect(getCurrentRepositoryInfoSpy).toHaveBeenCalled();
      mountedComponent.find('button#editService').simulate('click');
      const secondGetSpy = jest.spyOn(networking, 'get').mockImplementation(() => Promise.resolve(''));
      expect(cloneAndEditServiceSpy).toHaveBeenCalled();
      expect(instance.state.isLoading).toBe(true);
      window.location.assign = jest.fn();
      // Resolving get in cloneAndEditService
      return Promise.resolve().then(() => {
        expect(secondGetSpy).toHaveBeenCalled();
        // tslint:disable-next-line:max-line-length
        expect(window.location.assign).toHaveBeenCalledWith(`${window.location.origin}/designer/${mockServices[0].full_name}`);
      });
    });
  });

  it('+++ should redirect user to already cloned service', () => {
    mockServices[0].is_cloned_to_local = true;
    const mountedComponent = mount(
      <CloneServiceComponent
        language={mockLanguage}
        services={mockServices}
        classes={mockClasses}
        location={mockLocation}
        history={mockHistory}
        match={mockMatch}
      />,
    );

    const instance = mountedComponent.instance() as CloneServiceComponent;
    const getSpy = jest.spyOn(networking, 'get').mockImplementation(() => Promise.resolve(mockResult));
    const cloneAndEditServiceSpy = jest.spyOn(instance, 'cloneAndEditService');
    const getCurrentRepositoryInfoSpy = jest.spyOn(instance, 'getCurrentRepositoryInfo');
    window.location.assign = jest.fn();
    instance.componentDidMount();
    // Resolving get in componentDidMount
    return Promise.resolve().then(() => {
      expect(getSpy).toHaveBeenCalled();
      expect(getCurrentRepositoryInfoSpy).toHaveBeenCalled();
      mountedComponent.find('button#editService').simulate('click');
      expect(cloneAndEditServiceSpy).toHaveBeenCalled();
      expect(instance.state.isLoading).toBe(true);
      // tslint:disable-next-line:max-line-length
      expect(window.location.assign).toHaveBeenCalledWith(`${window.location.origin}/designer/${mockServices[0].full_name}`);
    });
  });

  it('+++ should redirect user to service code', () => {
    const mountedComponent = mount(
      <CloneServiceComponent
        language={mockLanguage}
        services={mockServices}
        classes={mockClasses}
        location={mockLocation}
        history={mockHistory}
        match={mockMatch}
      />,
    );

    const instance = mountedComponent.instance() as CloneServiceComponent;
    const getSpy = jest.spyOn(networking, 'get').mockImplementation(() => Promise.resolve(mockResult));
    const redirectToCodeSpy = jest.spyOn(instance, 'redirectToCode');
    const getCurrentRepositoryInfoSpy = jest.spyOn(instance, 'getCurrentRepositoryInfo');
    window.location.assign = jest.fn();
    instance.componentDidMount();
    // Resolving get in componentDidMount
    return Promise.resolve().then(() => {
      expect(getSpy).toHaveBeenCalled();
      expect(getCurrentRepositoryInfoSpy).toHaveBeenCalled();
      mountedComponent.find('button#seeSourceCode').simulate('click');
      expect(redirectToCodeSpy).toHaveBeenCalled();
      // tslint:disable-next-line:max-line-length
      expect(window.location.assign).toHaveBeenCalledWith(`/${mockServices[0].full_name}`);
    });
  });

  it('+++ should set component to unmounted on componentWillUnmount ', () => {
    const mountedComponent = mount(
      <CloneServiceComponent
        language={mockLanguage}
        services={mockServices}
        classes={mockClasses}
        location={mockLocation}
        history={mockHistory}
        match={mockMatch}
      />,
    );
    const instance = mountedComponent.instance() as CloneServiceComponent;
    const componentWillUnmountSpy = jest.spyOn(instance, 'componentWillUnmount');
    instance.componentWillUnmount();
    expect(componentWillUnmountSpy).toHaveBeenCalled();
    expect(instance._isMounted).toBe(false);
  });

  it('+++ Should show correct date', () => {
    const mountedComponent = mount(
      <CloneServiceComponent
        language={mockLanguage}
        services={mockServices}
        classes={mockClasses}
        location={mockLocation}
        history={mockHistory}
        match={mockMatch}
      />,
    );

    const instance = mountedComponent.instance() as CloneServiceComponent;
    expect(instance.formatNameAndDate('', mockServices[0].created_at)).toBe('10.01.2019 11:22');
    expect(instance.formatNameAndDate('', mockServices[0].created_at) === `${mockServices[0].created_at}`).toBe(false);
    expect(instance.formatNameAndDate('Kari', mockServices[0].created_at)).toBe('Kari 10.01.2019 11:22');
    // tslint:disable-next-line:max-line-length
    expect(instance.formatNameAndDate('Kari', mockServices[0].created_at) === `Kari ${mockServices[0].created_at}`).toBe(false);
  });
});
