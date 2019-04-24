using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Xml.Serialization;
using AltinnCore.Common.Configuration;
using AltinnCore.Common.Models;
using AltinnCore.Common.Services.Interfaces;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace AltinnCore.Common.Services.Implementation
{
    /// <summary>
    /// implementation for data handling
    /// </summary>
    public class DataAppSI : IData
    {
        private readonly PlatformStorageSettings _platformStorageSettings;

        /// <summary>
        /// Initializes a new data of the <see cref="DataAppSI"/> class.
        /// </summary>
        /// <param name="data">form service</param>
        public DataAppSI(IOptions<PlatformStorageSettings> platformStorageSettings)
        {
            _platformStorageSettings = platformStorageSettings.Value;
        }

        /// <summary>
        /// Insert form for the given instance
        /// </summary>
        /// <typeparam name="T">The input type</typeparam>
        /// <param name="dataToSerialize">The data to serialize</param>
        /// <param name="instanceId">The formId</param>
        /// <param name="type">The type</param>
        /// <param name="applicationOwnerId">The Organization code for the service owner</param>
        /// <param name="applicationId">The service code for the current service</param>
        /// <param name="instanceOwnerId">The partyId</param>
        public async Task<Instance> InsertData<T>(T dataToSerialize, Guid instanceId, Type type, string applicationOwnerId, string applicationId, int instanceOwnerId)
        {
            string apiUrl = $"{_platformStorageSettings.ApiUrl}/instances/{instanceId}/data?formId=boatdata&instanceOwnerId={instanceOwnerId}";
            Instance instance;
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = new Uri(apiUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/xml"));

                XmlSerializer serializer = new XmlSerializer(type);
                using (MemoryStream stream = new MemoryStream())
                {
                    serializer.Serialize(stream, dataToSerialize);
                    stream.Position = 0;
                    StreamContent streamContent = new StreamContent(stream);
                    streamContent.Headers.ContentType = MediaTypeHeaderValue.Parse("application/xml");
                    Task<HttpResponseMessage> response = client.PostAsync(apiUrl, streamContent);
                    if (!response.Result.IsSuccessStatusCode)
                    {
                        throw new Exception("Unable to save form model");
                    }

                    string instanceData = await response.Result.Content.ReadAsStringAsync();
                    instance = JsonConvert.DeserializeObject<Instance>(instanceData);
                }
            }

            return instance;
        }

        /// <summary>
        /// update the form 
        /// </summary>
        /// <typeparam name="T">The input type</typeparam>
        /// <param name="dataToSerialize">The data to serialize</param>
        /// <param name="instanceId">The formId</param>
        /// <param name="type">The type</param>
        /// <param name="applicationOwnerId">The Organization code for the service owner</param>
        /// <param name="applicationId">The service code for the current service</param>
        /// <param name="instanceOwnerId">The partyId</param>
        public void UpdateData<T>(T dataToSerialize, Guid instanceId, Type type, string applicationOwnerId, string applicationId, int instanceOwnerId, Guid dataId)
        {
            string apiUrl = $"{_platformStorageSettings.ApiUrl}/instances/{instanceId}/data/{dataId}?instanceOwnerId={instanceOwnerId}";

            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = new Uri(apiUrl);
                XmlSerializer serializer = new XmlSerializer(type);
                using (MemoryStream stream = new MemoryStream())
                {
                    serializer.Serialize(stream, dataToSerialize);
                    stream.Position = 0;
                    StreamContent streamContent = new StreamContent(stream);
                    streamContent.Headers.ContentType = MediaTypeHeaderValue.Parse("application/xml");
                    Task<HttpResponseMessage> response = client.PutAsync(apiUrl, streamContent);
                    if (!response.Result.IsSuccessStatusCode)
                    {
                        throw new Exception("Unable to save form model");
                    }

                    //return Guid.Parse(await response.Result.Content.ReadAsAsync<string>());
                }
            }
        }

        /// <summary>
        /// Gets the form data
        /// </summary>
        /// <param name="instanceId">The instance id</param>
        /// <param name="type">The type that form data will be serialized to</param>
        /// <param name="applicationOwner">The Organization code for the service owner</param>
        /// <param name="applicationId">The service code for the current service</param>
        /// <param name="instanceOwnerId">The partyId used to find the party on disc</param>
        /// <param name="dataId">the data id</param>
        /// <returns>The deserialized form data</returns>
        public object GetFormData(Guid instanceId, Type type, string applicationOwner, string applicationId, int instanceOwnerId, Guid dataId)
        {
            string apiUrl = $"{_platformStorageSettings.ApiUrl}/instances/{instanceId}/data/{dataId}?instanceOwnerId={instanceOwnerId}";
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = new Uri(apiUrl);
                Task<HttpResponseMessage> response = client.GetAsync(apiUrl);
                if (response.Result.IsSuccessStatusCode)
                {
                    XmlSerializer serializer = new XmlSerializer(type);
                    try
                    {
                        using (Stream stream = response.Result.Content.ReadAsStreamAsync().Result)
                        {
                            return serializer.Deserialize(stream);
                        }
                    }
                    catch
                    {
                        return Activator.CreateInstance(type);
                    }
                }
                else
                {
                    return Activator.CreateInstance(type);
                }
            }
        }
    }
}
