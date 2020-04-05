namespace NetCoreConfVirtual.API.Avengers.Model
{
    using System;
    public class Film : Base
    {
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public string Description { get; set; }
        public string Director { get; set; }
    }
}
